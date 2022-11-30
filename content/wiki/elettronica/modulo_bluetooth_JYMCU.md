+++
title="Modulo bluetooth JYMCU"
extra.anteprima="https://img.dxcdn.com/productimages/sku_104299_2.jpg"
+++
### Sketch & Wiring

<div>

[Sketch](http://www.fablabimperia.wiki/w/images/1/15/Bluetooth.ino) per
ricezione/invio con arduino via bluetooh al posto della seriale.\
Ecco i collegamenti ad arduino:\
![wiring](Arduinobluetooth.png "fig:wiring")

### Links utili

-   [How to 3D Print via Bluetooth](http://reprap.org/wiki/Jy-mcu)
-   [Interfacing Pinguino with Bluetooth
    JY-MCU](http://wiki.pinguino.cc/index.php/Interfacing_with_Bluetooth_JY-MCU)

### Manuale fornito

<div>

[Link al
pdf](http://www.fablabimperia.wiki/w/images/8/80/BT_manual-1-.pdf)

<div>
<div>

### AT Commands

Da <http://byron76.blogspot.it/2011/09/one-board-several-firmwares.html>

> `           ...boards seem identical, they had different firmwares. `\
> `The suntekstore ones has HC05 firmware, the DealExtreme ones has linvor`
>
> `           1.5 firmware.`\
> `           The differences between them is mainly the AT command`\
> `           set.`<b><u>`Linvor 1.5`</u>` `</b>`also known as `<b>`HC06`</b>\
> `           This firmware offers a very limited set of AT command.`\
> `           By default the baudrate is 9600 8N1.`
>
> `           For this firmware you have to `<b>`not `</b>`send LF or CR`\
> `           character at the end of your AT command.AT programming mode is up`\
> `           when your board is not paired by bluetooth devices. For this`\
> `           firmware, you have to copy/paste AT command since timings is`\
> `           important. You can send about one command per second.`
>
> <table cellpadding="2" cellspacing="0">
> <tr>
> <td style="border-bottom-width:1pt;border-style:solid none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);border-top-width:1pt;border-top-color:rgb(128,128,128);padding:0.05cm 0cm 0.05cm 0.05cm" width="127">
> <div align="center" style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small"><b>`Command`</b></span></span>\
> `                   `
>
> </div>
> </td>
> <td style="border-bottom-width:1pt;border-style:solid none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);border-top-width:1pt;border-top-color:rgb(128,128,128);padding:0.05cm 0cm 0.05cm 0.05cm" width="148">
> <div align="center" style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small"><b>`Response`</b></span></span>\
> `                   `
>
> </div>
> </td>
> <td style="border:1pt solid rgb(128,128,128);padding:0.05cm" width="327">
> <div align="center" style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small"><b>`Note`</b></span></span>\
> `                   `
>
> </div>
> </td>
> </tr>
> <tr>
> <td style="border-bottom-width:1pt;border-style:none none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);padding:0cm 0cm 0.05cm 0.05cm" width="127">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`AT`</span></span>\
> `                   `
>
> </div>
> </td>
> <td style="border-bottom-width:1pt;border-style:none none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);padding:0cm 0cm 0.05cm 0.05cm" width="148">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`OK`</span></span>\
> `                   `
>
> </div>
> </td>
> <td style="border-bottom-width:1pt;border-style:none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);border-right-width:1pt;border-right-color:rgb(128,128,128);padding:0cm 0.05cm 0.05cm" width="327">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`Usefull to check connection and `\
> `                        baudrate`</span></span>\
> `                   `
>
> </div>
> </td>
> </tr>
> <tr>
> <td style="border-bottom-width:1pt;border-style:none none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);padding:0cm 0cm 0.05cm 0.05cm" width="127">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`AT+VERSION`</span></span>\
> `                   `
>
> </div>
> </td>
> <td style="border-bottom-width:1pt;border-style:none none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);padding:0cm 0cm 0.05cm 0.05cm" width="148">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`Linvor1.5`</span></span>\
> `                   `
>
> </div>
> </td>
> <td style="border-bottom-width:1pt;border-style:none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);border-right-width:1pt;border-right-color:rgb(128,128,128);padding:0cm 0.05cm 0.05cm" width="327">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`Get the version of the`\
> `                       module`</span></span>\
> `                   `
>
> </div>
> </td>
> </tr>
> <tr>
> <td style="border-bottom-width:1pt;border-style:none none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);padding:0cm 0cm 0.05cm 0.05cm" width="127">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`AT+BAUD`<span style="color:red">`x`</span></span></span>\
> `                   `
>
> </div>
> </td>
> <td style="border-bottom-width:1pt;border-style:none none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);padding:0cm 0cm 0.05cm 0.05cm" width="148">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`OK`<span style="color:rgb(255,204,0)">`yyyy`</span></span></span>\
> `                   `
>
> </div>
> </td>
> <td style="border-bottom-width:1pt;border-style:none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);border-right-width:1pt;border-right-color:rgb(128,128,128);padding:0cm 0.05cm 0.05cm" width="327">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`Set the baudrate :`</span></span>\
> `                   `
>
> </div>
> <div style="border:none;padding:0cm">
>
> `                       `<span style="color:red"><span style="font-family:Courier"><span style="font-size:small">`x`</span></span></span>` `<span style="font-family:Courier"><span style="font-size:small">`can`\
> `                       take the following values :`</span></span>\
> `                   `
>
> </div>
>
> -   <div style="border:none;padding:0cm">
>
>     `                               `<span style="color:red"><span style="font-family:Courier"><span style="font-size:x-small">`1`</span></span></span>` `<span style="font-family:Courier"><span style="font-size:x-small">`for `</span></span><span style="color:rgb(255,204,0)"><span style="font-family:Courier"><span style="font-size:x-small">`1200`</span></span></span><span style="color:blue"><span style="font-family:Courier"><span style="font-size:x-small">` `</span></span></span><span style="font-family:Courier"><span style="font-size:x-small">`bps `</span></span>\
>     `                           `
>
>     </div>
> -   <div style="border:none;padding:0cm">
>
>     `                               `<span style="color:red"><span style="font-family:Courier"><span style="font-size:x-small">`2`</span></span></span>` `\
>     `                                  `<span style="color:rgb(255,204,0)"><span style="font-family:Courier"><span style="font-size:x-small">`2400`</span></span></span><span style="color:blue"><span style="font-family:Courier"><span style="font-size:x-small">` `</span></span></span><span style="font-family:Courier"><span style="font-size:x-small">`bps`</span></span>\
>     `                           `
>
>     </div>
> -   <div style="border:none;padding:0cm">
>
>     `                               `<span style="color:red"><span style="font-family:Courier"><span style="font-size:x-small">`3`</span></span></span>`  `\
>     `                                 `<span style="color:rgb(255,204,0)"><span style="font-family:Courier"><span style="font-size:x-small">`4800`</span></span></span><span style="color:blue"><span style="font-family:Courier"><span style="font-size:x-small">` `</span></span></span><span style="font-family:Courier"><span style="font-size:x-small">`bps `</span></span>\
>     `                           `
>
>     </div>
> -   <div style="border:none;padding:0cm">
>
>     `                               `<span style="color:red"><span style="font-family:Courier"><span style="font-size:x-small">`4`</span></span></span>`  `\
>     `                                 `<span style="color:rgb(255,204,0)"><span style="font-family:Courier"><span style="font-size:x-small">`9600`</span></span></span><span style="color:blue"><span style="font-family:Courier"><span style="font-size:x-small">` `</span></span></span><span style="font-family:Courier"><span style="font-size:x-small">`bps `</span></span>\
>     `                           `
>
>     </div>
> -   <div style="border:none;padding:0cm">
>
>     `                               `<span style="color:red"><span style="font-family:Courier"><span style="font-size:x-small">`5`</span></span></span>`  `\
>     `                                `<span style="color:rgb(255,204,0)"><span style="font-family:Courier"><span style="font-size:x-small">`19200`</span></span></span><span style="color:blue"><span style="font-family:Courier"><span style="font-size:x-small">` `</span></span></span><span style="font-family:Courier"><span style="font-size:x-small">`bps `</span></span>\
>     `                           `
>
>     </div>
> -   <div style="border:none;padding:0cm">
>
>     `                               `<span style="color:red"><span style="font-family:Courier"><span style="font-size:x-small">`6`</span></span></span>`  `\
>     `                                `<span style="color:rgb(255,204,0)"><span style="font-family:Courier"><span style="font-size:x-small">`38400`</span></span></span><span style="color:blue"><span style="font-family:Courier"><span style="font-size:x-small">` `</span></span></span><span style="font-family:Courier"><span style="font-size:x-small">`bps `</span></span>\
>     `                           `
>
>     </div>
> -   <div style="border:none;padding:0cm">
>
>     `                               `<span style="color:red"><span style="font-family:Courier"><span style="font-size:x-small">`7`</span></span></span>`  `\
>     `                                `<span style="color:rgb(255,204,0)"><span style="font-family:Courier"><span style="font-size:x-small">`57600`</span></span></span><span style="color:blue"><span style="font-family:Courier"><span style="font-size:x-small">` `</span></span></span><span style="font-family:Courier"><span style="font-size:x-small">`bps `</span></span>\
>     `                           `
>
>     </div>
> -   <div style="border:none;padding:0cm">
>
>     `                               `<span style="color:red"><span style="font-family:Courier"><span style="font-size:x-small">`8`</span></span></span>`   `<span style="color:rgb(255,204,0)"><span style="font-family:Courier"><span style="font-size:x-small">`115200`</span></span></span><span style="color:blue"><span style="font-family:Courier"><span style="font-size:x-small">` `</span></span></span><span style="font-family:Courier"><span style="font-size:x-small">`bps `</span></span>\
>     `                           `
>
>     </div>
> -   <div style="border:none;padding:0cm">
>
>     `                               `<span style="color:red"><span style="font-family:Courier"><span style="font-size:x-small">`9`</span></span></span>`   `<span style="color:rgb(255,204,0)"><span style="font-family:Courier"><span style="font-size:x-small">`230400`</span></span></span><span style="color:blue"><span style="font-family:Courier"><span style="font-size:x-small">` `</span></span></span><span style="font-family:Courier"><span style="font-size:x-small">`bps `</span></span>\
>     `                           `
>
>     </div>
> -   <div style="border:none;padding:0cm">
>
>     `                               `<span style="color:red"><span style="font-family:Courier"><span style="font-size:x-small">`A`</span></span></span>`   `<span style="color:rgb(255,204,0)"><span style="font-family:Courier"><span style="font-size:x-small">`460800`</span></span></span><span style="color:blue"><span style="font-family:Courier"><span style="font-size:x-small">` `</span></span></span><span style="font-family:Courier"><span style="font-size:x-small">`bps `</span></span>\
>     `                           `
>
>     </div>
> -   <div style="border:none;padding:0cm">
>
>     `                               `<span style="color:red"><span style="font-family:Courier"><span style="font-size:x-small">`B`</span></span></span>`   `<span style="color:rgb(255,204,0)"><span style="font-family:Courier"><span style="font-size:x-small">`921600`</span></span></span><span style="color:blue"><span style="font-family:Courier"><span style="font-size:x-small">` `</span></span></span><span style="font-family:Courier"><span style="font-size:x-small">`bps `</span></span>\
>     `                           `
>
>     </div>
> -   <div style="border:none;padding:0cm">
>
>     `                               `<span style="color:red"><span style="font-family:Courier"><span style="font-size:x-small">`C`</span></span></span>`  `<span style="color:rgb(255,204,0)"><span style="font-family:Courier"><span style="font-size:x-small">`1382400`</span></span></span><span style="color:blue"><span style="font-family:Courier"><span style="font-size:x-small">` `</span></span></span><span style="font-family:Courier"><span style="font-size:x-small">`bps`</span></span>\
>     `                           `
>
>     </div>
>
> </td>
> </tr>
> <tr>
> <td style="border-bottom-width:1pt;border-style:none none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);padding:0cm 0cm 0.05cm 0.05cm" width="127">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`AT+NAME`<span style="color:red">`String`</span></span></span>\
> `                   `
>
> </div>
> </td>
> <td style="border-bottom-width:1pt;border-style:none none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);padding:0cm 0cm 0.05cm 0.05cm" width="148">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`OKsetname`</span></span>\
> `                   `
>
> </div>
> </td>
> <td style="border-bottom-width:1pt;border-style:none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);border-right-width:1pt;border-right-color:rgb(128,128,128);padding:0cm 0.05cm 0.05cm" width="327">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`Change bluetooth device name`\
> `                       :`</span></span>\
> `                   `
>
> </div>
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`String can be any string you want !`\
> `                       be creative !! (20 characters limited)`</span></span>\
> `                   `
>
> </div>
> </td>
> </tr>
> <tr>
> <td style="border-bottom-width:1pt;border-style:none none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);padding:0cm 0cm 0.05cm 0.05cm" width="127">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`AT+PIN`<span style="color:red">`xxxx`</span></span></span>\
> `                   `
>
> </div>
> </td>
> <td style="border-bottom-width:1pt;border-style:none none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);padding:0cm 0cm 0.05cm 0.05cm" width="148">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`OKsetpin`</span></span>\
> `                   `
>
> </div>
> </td>
> <td style="border-bottom-width:1pt;border-style:none solid solid;border-bottom-color:rgb(128,128,128);border-left-width:1pt;border-left-color:rgb(128,128,128);border-right-width:1pt;border-right-color:rgb(128,128,128);padding:0cm 0.05cm 0.05cm" width="327">
> <div style="border:none;padding:0cm">
>
> `                       `<span style="font-family:Courier"><span style="font-size:small">`Set the bluetooth pincode`\
> `                       :`</span></span>\
> `                   `
>
> </div>
> <div style="border:none;padding:0cm">
>
> `                       `<span style="color:red"><span style="font-family:Courier"><span style="font-size:small">`1234`</span></span></span>` `<span style="font-family:Courier"><span style="font-size:small">`by`\
> `                       default`</span></span>\
> `                   `
>
> </div>
> </td>
> </tr>
> </table>
> <div>
>
> `           And that's it !!! No other AT command.`\
> `       `
>
> </div>

vedere anche dallo stesso blog:

-   [HC05
    Firmware](http://byron76.blogspot.it/2011/09/hc05-firmware.html)
-   [Upgrade your bluetooth
    module](http://byron76.blogspot.it/2011/09/upgrade-your-bluetooth-module.html)
