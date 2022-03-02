# Tankerkoenig Lovelace Card

[![Version](https://img.shields.io/badge/version-1.1.0-green.svg?style=for-the-badge)](#) [![mantained](https://img.shields.io/maintenance/yes/2021.svg?style=for-the-badge)](#) [![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

[![maintainer](https://img.shields.io/badge/maintainer-Goran%20Zunic%20%40panbachi-blue.svg?style=for-the-badge)](https://www.panbachi.de)

## Changed in this fork
- "digits" parameter added. Price shown in 2 or 3 digits. Third digit is superscripted
- "street" and "city" replaced name parameter. -> brand, street and city are shown each in different line
- parameter "sort" added .> pick what to sort e5, e10 or diesel
- fixed icon when show_closed was set to true and gas station was closed
- add console.info 
- add Station-LINK on Station-IMG customizing over Card-Entity
- add Station-STREET customizing over Card-Entity
- add Station-CITY customizing over Card-Entity
- change localisation for Station-LOGOS to /www/community/tankerkoenig-card/logos/
- add calculated(!) Price for V-Power Racing (only Shell-Stations) (Surcharge is customizing in the js-Code; +0,23 Cent)

## Installation
1. Install this component by copying the `tankerkoenig-card.js` to your `/www/community/tankerkoenig-card/` folder.
2. Add this to your Lovelace-Configuration -> Ressource as a js-Modul

```yaml
type: custom:tankerkoenig-card
name: Benzinpreise
show:
  - e5
  - diesel
sort: e5
digits: 3
show_closed: true
show_header: false
stations:
  - brand: SHELL
    street: Bahnstr. 27
    city: 50181 Bedburg
    link: https://find.shell.com/de/fuel/10025871-bedburg-bahnstr-27/de_DE
    e5: sensor.tankerkoenig_shell_bedburg_bahnstr_27_e5
    diesel: sensor.tankerkoenig_shell_bedburg_bahnstr_27_diesel
  - brand: SHELL
    street: Neusser Str. 55
    city: 50181 Bedburg
    link: https://find.shell.com/de/fuel/10024920-bedburg-neusser-str/de_DE
    e5: sensor.tankerkoenig_shell_bedburg_neusser_str_55_e5
    diesel: sensor.tankerkoenig_shell_bedburg_neusser_str_55_diesel
  - brand: WIPPENHOHN
    street: Robert-Bosch-Str. 2
    city: 50181 Bedburg
    link: http://www.wippenhohn.com/
    e5: sensor.tankerkoenig_tankstelle_wippenhohn_e5
    diesel: sensor.tankerkoenig_tankstelle_wippenhohn_diesel
  - brand: ARAL
    street: BAB 61 - Ost
    city: 50181 Bedburg
    link: https://tankstelle.aral.de/tankstelle/20169700
    e5: sensor.tankerkoenig_aral_tankstelle_bat_bedburger_land_ost_e5
    diesel: sensor.tankerkoenig_aral_tankstelle_bat_bedburger_land_ost_diesel
  - brand: ARAL
    street: BAB 61 - West
    city: 50181 Bedburg
    link: https://tankstelle.aral.de/tankstelle/20185000
    e5: sensor.tankerkoenig_aral_tankstelle_bat_bedburger_land_west_e5
    diesel: sensor.tankerkoenig_aral_tankstelle_bat_bedburger_land_west_diesel
  - brand: AVEX
    street: Glescher Str. 126
    city: 50126 Bergheim
    link: https://www.avex-tankstellen.de/standorte/bergheim-paffendorf/
    e5: sensor.tankerkoenig_avex_bergheim_e5
    diesel: sensor.tankerkoenig_avex_bergheim_diesel
```

### Options
| key           | values            | required | description
|---------------|-------------------|----------|---
| `name`        | String            | yes      | Name of the card that should be shown in the frontend
| `show`        | [e5, e10, diesel] | yes      | What should be shown
| `show_closed` | Boolean           | no       | Show closed stations (default: false)
| `show_header` | Boolean           | no       | Show card-header (default: true)
| `stations`    | List of stations  | yes      | List of stations

#### Stations
| key      | value  | required | description
|----------|--------|----------|---
| `name`   | String | yes      | The name of the station (for example the street)
| `brand`  | String | yes      | The brand of the station used for the icon and for the name
| `street` | String | yes      | The street of the station
| `city`   | String | yes      | The city of the station
| `link`   | String | yes      | The link to the website of the station
| `e5`     | Sensor | no*      | Sensor for the E5 price
| `e10`    | Sensor | no*      | Sensor for the E10 price
| `diesel` | Sensor | no*      | Sensor for the diesel price

*only required if it should be shown

## Additional
To use the icons you have to use lowercase names, which has to be the same as in the `brand` settings. The icons must be in `*.png` format.

### Example
For the brand ARAL there has to be an icon with the following path:

`/www/community/tankerkoenig-card/logos/aral.png`

# Support me / Follow me
[![Web](https://img.shields.io/badge/www-panbachi.de-blue.svg?style=flat-square&colorB=3d72a8&colorA=333333)](https://www.panbachi.de)
[![Facebook](https://img.shields.io/badge/-%40panbachi.de-blue.svg?style=flat-square&logo=facebook&colorB=3B5998&colorA=eee)](https://www.facebook.com/panbachi.de/)
[![Twitter](https://img.shields.io/badge/-%40panbachi-blue.svg?style=flat-square&logo=twitter&colorB=1DA1F2&colorA=eee)](https://twitter.com/panbachi)
[![Instagram](https://img.shields.io/badge/-%40panbachi.de-blue.svg?style=flat-square&logo=instagram&colorB=E4405F&colorA=eee)](http://instagram.com/panbachi.de)
[![YouTube](https://img.shields.io/badge/-%40panbachi-blue.svg?style=flat-square&logo=youtube&colorB=FF0000&colorA=eee&logoColor=FF0000)](https://www.youtube.com/channel/UCO7f2L7ZsDCpOtRfKnPqNow)
