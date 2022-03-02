﻿# Tankerkoenig Lovelace Card

[![Version](https://img.shields.io/badge/version-1.1.0-green.svg?style=for-the-badge)](#) [![mantained](https://img.shields.io/maintenance/yes/2021.svg?style=for-the-badge)](#) [![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

[![maintainer](https://img.shields.io/badge/maintainer-Goran%20Zunic%20%40panbachi-blue.svg?style=for-the-badge)](https://www.panbachi.de)

## Thanksgiving
Original: https://github.com/panbachi/tankerkoenig-card

Fork:     https://github.com/KrX3D/tankerkoenig-card

## Changed in this fork
- add js-Console - Info 
- add Station-LINK on Station-IMG customizing over Card-Entity
- add Station-NAME over Card-Entity
- change localisation for Station-LOGOS to /www/community/tankerkoenig-card/logos/
- add calculated(!) Price for V-Power Racing (only Shell-Stations) (Surcharge is customizing in the js-Code; +0,23 Cent)
- change Card-Title from name to title

## Installation
1. Install this component by copying the `tankerkoenig-card.js` to your `/www/community/tankerkoenig-card/` folder.
2. Add this to your Lovelace-Configuration -> Ressource as a js-Modul
3. Create a lovelance - customizing-Card with following code

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
    e5: sensor.tankerkoenig_shell_bedburg_bahnstr_27_e5
    diesel: sensor.tankerkoenig_shell_bedburg_bahnstr_27_diesel
  - brand: shell
    name: SHELL Deutschland GmbH
    street: Neusser Str. 55
    city: 50181 Bedburg
    link: https://find.shell.com/de/fuel/10024920-bedburg-neusser-str/de_DE
    e5: sensor.tankerkoenig_shell_bedburg_neusser_str_55_e5
    diesel: sensor.tankerkoenig_shell_bedburg_neusser_str_55_diesel
  - brand: wippenhohn
    name: Freie Tankstelle Wippenhohn e.K
    street: Robert-Bosch-Str. 2
    city: 50181 Bedburg
    link: http://www.wippenhohn.com/
    e5: sensor.tankerkoenig_tankstelle_wippenhohn_e5
    diesel: sensor.tankerkoenig_tankstelle_wippenhohn_diesel
  - brand: aral
    name: ARAL AG
    street: BAB 61 - Ost
    city: 50181 Bedburg
    link: https://tankstelle.aral.de/tankstelle/20169700
    e5: sensor.tankerkoenig_aral_tankstelle_bat_bedburger_land_ost_e5
    diesel: sensor.tankerkoenig_aral_tankstelle_bat_bedburger_land_ost_diesel
  - brand: aral
    name: ARAL AG
    street: BAB 61 - West
    city: 50181 Bedburg
    link: https://tankstelle.aral.de/tankstelle/20185000
    e5: sensor.tankerkoenig_aral_tankstelle_bat_bedburger_land_west_e5
    diesel: sensor.tankerkoenig_aral_tankstelle_bat_bedburger_land_west_diesel
  - brand: avex
    name: AVEX GmbH
    street: Glescher Str. 126
    city: 50126 Bergheim
    link: https://www.avex-tankstellen.de/standorte/bergheim-paffendorf/
    e5: sensor.tankerkoenig_avex_bergheim_e5
    diesel: sensor.tankerkoenig_avex_bergheim_diesel
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

*only required if it should be shown

## Additional
To use the icons you have to use lowercase names, which has to be the same as in the `brand` settings. The icons must be in `*.png` format.

### Example
For the brand ARAL there has to be an icon with the following path:

`/www/community/tankerkoenig-card/logos/aral.png`

### Screenshot
<img width="496" alt="image" src="https://user-images.githubusercontent.com/97361636/156403353-a7e4051c-aee0-4079-b60e-e2d5e1b9bd26.png">