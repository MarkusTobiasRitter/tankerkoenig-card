import {
    LitElement,
    html,
    css,
    property
} from "https://unpkg.com/lit-element@2.3.1/lit-element.js?module";

const tankerkoenigVersion = "1.2.0";
console.info("%c Tankerkoenig-Card %c ".concat(tankerkoenigVersion, " "), "color: white; background: #555555; ", "color: white; background: #3a7ec6; ");

class TankerkoenigCard extends LitElement {
    static get properties() {
        return {
            hass: {},
            config: {}
        };
    }
    
    render() {
        this.stations.sort((a, b) => {
            let key = this.config.sort || 'e5';
           
            if(this.hass.states[a[key]].state === 'unknown' || this.hass.states[a[key]].state === 'unavailable') {
                return 1;
            }
            
            if(this.hass.states[b[key]].state === 'unknown' || this.hass.states[b[key]].state === 'unavailable') {
                return -1;
            }
            
            if(this.hass.states[a[key]].state > this.hass.states[b[key]].state) return 1;
            if(this.hass.states[b[key]].state > this.hass.states[a[key]].state) return -1;
            
            return 0;
        });
        
        let header = '';
        
        if(this.show_header === true) {
            header = this.config.title || 'Tankerkönig';
        }
        
        return html`<ha-card elevation="2">
            <h1 class="card-header"><div class="card-header">${header}</div></h1>
            <div class="container">
                <table width="100%">
                    ${this.stations.map((station) => {
                    
                        if(!this.isOpen(station) && this.config.show_closed !== true) return;
                    
                        return html`<tr>
                        
                        <td class="logo"><a href="${station.link}" target="_blank"><img height="40" width="40" src="/local/gasstation_logo/${station.brand.toLowerCase()}.png"></a></td>
                        <td class="name">${station.name} <br> ${station.street} <br> ${station.city}</td>
                        ${this.renderPrice(station, 'e5')}
                        ${this.renderPrice(station, 'e10')}
                        ${this.renderPrice(station, 'diesel')}
			if(this.calc_vpower === true) {
                            ${this.renderPriceVPower(station, 'e5')}
			}
                        </tr>`;
                    })}
                </table>
            </div>
        </ha-card>`;
    }
    
    isOpen(station) {
        const state = this.hass.states[station.status].state || null;
        if(state && state != "on") {
            return false;
        }
        return true;
    }
    
    renderPriceVPower(station, type)
    {
		if(station.brand == 'shell' && type == 'e5')
		{
		    const state = this.hass.states[station[type]] || null;
            if(state && state.state != 'unknown' && state.state != 'unavailable' && this.isOpen(station)) {
				const vpowerSurcharge = 0.250;
		        const vPriceStrg = Number((state.state*1 + vpowerSurcharge).toFixed(3)) + '';
                let digits = this.config.digits || '3';
                       
                if(digits == '2')
                {
                    return html`<td><ha-label-badge
                           label="V-RACING"
                           ><span style="font-size: 75%;">${vPriceStrg.slice(0, -1)}&euro;</span></ha-label-badge></td>`;
                }
                else if(digits == '3')
                {
                    return html`<td><ha-label-badge
                           label="V-RACING"
                           ><span style="font-size: 75%;">${vPriceStrg.slice(0, -1)}<sup>${vPriceStrg.slice(-1)}</sup>&euro;</span></ha-label-badge></td>`;
                }               
            } else {
                return html`<td><ha-label-badge
                  label="V-RACING"
                  ><ha-icon icon="mdi:gas-station-off-outline"></ha-icon></ha-label-badge></td>`;
		    }
		 }
	}
	
    renderPrice(station, type) {
        if(!this.has[type]) {
            return;
        }
                
        const state = this.hass.states[station[type]] || null;

        if(state && state.state != 'unknown' && state.state != 'unavailable' && this.isOpen(station)) {
            
            let digits = this.config.digits || '3';
            
            if(digits == '2')
            {
                return html`<td><ha-label-badge
                  label="${type.toUpperCase()}"
                  @click="${() => this.fireEvent('hass-more-info', station[type])}"
                  ><span style="font-size: 75%;">${state.state.slice(0, -1)}&euro;</span></ha-label-badge></td>`;
            }
            else if(digits == '3')
            {
                return html`<td><ha-label-badge
                  label="${type.toUpperCase()}"
                  @click="${() => this.fireEvent('hass-more-info', station[type])}"
                  ><span style="font-size: 75%;">${state.state.slice(0, -1)}<sup>${state.state.slice(-1)}</sup>&euro;</span></ha-label-badge></td>`;
            }
        } else {
            return html`<td><ha-label-badge
              label="${type.toUpperCase()}"
              @click="${() => this.fireEvent('hass-more-info', station[type])}"
              ><ha-icon icon="mdi:gas-station-off-outline"></ha-icon></ha-label-badge></td>`;
        }
    }
    
    fireEvent(type, entityId, options = {}) {
          const event = new Event(type, {
              bubbles: options.bubbles || true,
              cancelable: options.cancelable || true,
              composed: options.composed || true,
          });
          event.detail = {entityId: entityId};
          this.dispatchEvent(event);
      }
    
    setConfig(config) {
        this.config = config;
        
        if(this.config.show_header !== false) {
            this.show_header = true;
        } else {
            this.show_header = false;
        }
        
        this.has = {
            e5: this.config.show.indexOf('e5') !== -1,
            e10: this.config.show.indexOf('e10') !== -1,
            diesel: this.config.show.indexOf('diesel') !== -1,
        };
        
        
        this.stations = this.config.stations.slice();
    }
    
    getCardSize() {
        return this.stations.length + 1;
    }
    
    static get styles() {
        return css`
            .container { padding: 0 16px 16px; }
            td { text-align: center; padding-top: 10px; }
            td.name { text-align: left; font-weight: bold; }
            td.gasstation img { vertical-align: middle; }
            ha-label-badge { font-size: 85%; }
            .label-badge .value { font-size: 70%; }
        `;
    }
}

customElements.define('tankerkoenig-card', TankerkoenigCard);
