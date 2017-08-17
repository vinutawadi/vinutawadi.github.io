
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: "iconPipe"})
export class IconPipe implements PipeTransform {

    transform(iconList, searchText) {
        if( !iconList ) return;
        if( !searchText ) return iconList;
        console.log(iconList)
        return iconList.filter(icon => icon.name.indexOf(searchText) > -1);
    }
}