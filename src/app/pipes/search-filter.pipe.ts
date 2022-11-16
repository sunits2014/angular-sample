import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: [], args: string): any {
    const noResult = [
      {
        title: 'No result found'
      }
    ];
    let filteredResult;
    if (!args) {
      return value;
    } else {
      filteredResult = value.filter((item: any) => {
        return (item.title.toLowerCase().replace(/ +/g, "").includes(args.toLowerCase().replace(/ +/g, "")) || item.brand.toLowerCase().replace(/ +/g, "").includes(args.toLowerCase().replace(/ +/g, "")));
      });
    }
    return (filteredResult && filteredResult.length > 0) ? filteredResult : noResult;
  }

}
