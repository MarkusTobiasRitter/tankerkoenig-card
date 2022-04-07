# Tankerkoenig Dashboard-Card

[![Version](https://img.shields.io/badge/version-1.2.0-green.svg?style=for-the-badge)](#) [![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)


## Thanksgiving
Original: https://github.com/panbachi/tankerkoenig-card

Fork:     https://github.com/KrX3D/tankerkoenig-card

## Changed in this fork
- add js-Console - Info 
- add Station-LINK on Station-IMG customizing over Card-Entity
- add Station-NAME over Card-Entity
- change localisation for Station-LOGOS to /www/community/tankerkoenig-card/logos/
- add calculated(!) Price for V-Power Racing (only Shell-Stations) (Surcharge is customizing in the js-Code; +0,25 Cent)
- change Card-Title from name to title

## Installation
1. Use HACS to install this component
2. Create a Dashboard-customizing-Card with following code

```yaml
type: custom:tankerkoenig-card
title: Benzinpreise
show:
  - e5
  - diesel
sort: e5
digits: 3
show_closed: true
show_header: true
stations:
  - brand: shell
    name: SHELL Deutschland GmbH
    street: Bahnstr. 27
    city: 50181 Bedburg
    link: https://find.shell.com/de/fuel/10025871-bedburg-bahnstr-27/de_DE
    e5: sensor.shell_bahnstr_27_super
    diesel: sensor.shell_bahnstr_27_diesel
    status: binary_sensor.shell_bahnstr_27_status
  - brand: shell
    name: SHELL Deutschland GmbH
    street: Neusser Str. 55
    city: 50181 Bedburg
    link: https://find.shell.com/de/fuel/10024920-bedburg-neusser-str/de_DE
    e5: sensor.shell_neusser_str_55_super
    diesel: sensor.shell_neusser_str_55_diesel
    status: binary_sensor.shell_neusser_str_55_status
  - brand: wippenhohn
    name: Freie Tankstelle Wippenhohn
    street: Robert-Bosch-Straße 2
    city: 50181 Bedburg
    link: https://www.wippenhohn.com/index.html
    e5: sensor.freie_tankstelle_e_wippenhohn_e_k_robert_bosch_str_2_super
    diesel: sensor.freie_tankstelle_e_wippenhohn_e_k_robert_bosch_str_2_diesel
    status: binary_sensor.freie_tankstelle_e_wippenhohn_e_k_robert_bosch_str_2_status
  - brand: avex
    name: AVEX Tankstelle
    street: Glescher Str. 126
    city: 50126 Bergheim
    link: https://www.avex-tankstellen.de/standorte/bergheim-paffendorf/
    e5: sensor.avex_glescher_str_126_super
    diesel: sensor.avex_glescher_str_126_diesel
    status: binary_sensor.avex_glescher_str_126_status

```

### Options
| key           | values            | required | description
|---------------|-------------------|----------|---
| `title`        | String            | yes      | Name of the card that should be shown in the frontend
| `show`        | [e5, e10, diesel] | yes      | What should be shown
| `show_closed` | Boolean           | no       | Show closed stations (default: false)
| `show_header` | Boolean           | no       | Show card-header (default: true)
| `stations`    | List of stations  | yes      | List of stations

#### Stations
| key      | value  | required | description
|----------|--------|----------|---
| `brand`  | String | yes      | The brand of the station used for the icon
| `name`   | String | yes      | The name of the station
| `street` | String | yes      | The street of the station
| `city`   | String | yes      | The city of the station
| `link`   | String | yes      | The link to the website of the station
| `e5`     | Sensor | no*      | Sensor for the E5 price
| `e10`    | Sensor | no*      | Sensor for the E10 price
| `diesel` | Sensor | no*      | Sensor for the diesel price
| `status` | Sensor | no*      | Binary Sensor for the Open/Close Status

*only required if it should be shown

## Additional
To use the icons you have to use lowercase names, which has to be the same as in the `brand` settings. The icons must be in `*.png` format.

### Example
For the brand ARAL there has to be an icon with the following path:

`/www/community/tankerkoenig-card/logos/aral.png`

### Screenshot
<img width="496" alt="image" src="https://user-images.githubusercontent.com/97361636/156403353-a7e4051c-aee0-4079-b60e-e2d5e1b9bd26.png">
