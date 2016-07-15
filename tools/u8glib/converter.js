/**
 * U8Glib bitmap converter
 * Copyright (C) 2016 João Brázio [https://github.com/jbrazio]
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
head.ready(function(){var e=null,t=null,n=document.getElementById("file-input"),i=document.getElementById("preview");i.getContext&&(e=new Image,t=i.getContext("2d"),n.addEventListener("change",function(){var o=n.files[0],d=new FileReader;return o?(d.addEventListener("load",function(){if(e.src=d.result,e.width>128||e.height>64)return void console.log("Image dimensions too big for processing.");t.canvas.width=e.width,t.canvas.height=e.height,t.drawImage(e,0,0);for(var n=t.getImageData(0,0,i.width,i.height).data,o=[],r=Math.ceil(t.canvas.width/8),u=r*i.height,a=(8*r-t.canvas.width,Math.random().toString(36).substring(7)),g=0;g<n.length;g+=4){var l=.3*n[g]+.59*n[g+1]+.11*n[g+2],c=127>l?1:0;o.push(c)}document.getElementById("output").innerHTML="// Width: "+t.canvas.width+", Height: "+t.canvas.height+"<br />",document.getElementById("output").innerHTML+="const unsigned char "+a+"["+u+"] PROGMEM = {<br />",document.getElementById("output").innerHTML+="&nbsp;&nbsp";for(var h=0,s=null,g=0;g<o.length;g++){if(g>0&&g%e.width==0){for(;8>h;h++)s+=0<<7-h;document.getElementById("output").innerHTML+="0x"+("0"+(255&s).toString(16)).slice(-2)+", ",document.getElementById("output").innerHTML+="<br/>&nbsp;&nbsp",s=null,h=0}h>7&&(document.getElementById("output").innerHTML+="0x"+("0"+(255&s).toString(16)).slice(-2)+", ",s=null,h=0),s+=o[g]<<7-h,h++}for(;8>h;h++)s+=0<<7-h;document.getElementById("output").innerHTML+="0x"+("0"+(255&s).toString(16)).slice(-2)+", ",document.getElementById("output").innerHTML+="<br />};"},!1),void d.readAsDataURL(o)):void console.log("Error opening file.")},!1))});