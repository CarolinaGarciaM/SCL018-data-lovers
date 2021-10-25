// estas funciones son de ejemplo
/* 
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}; */

export const sortData = (data, sortBy, sortOrder) => {

  const dataGhibli = data.films;

  const movieSort = dataGhibli.sort(function (a, b) {

    if (a [sortBy] > b [sortBy]) {
      return 1;
    }
    if (a [sortBy] < b [sortBy]) {
      return -1;
    }
    return 0;
  });
  
  if (sortOrder === "rt_score") {
    return movieSort.reverse();
  }
 /*  else if (sortOrder === "release_date") {
    return movieSort.reverse
  }   */
    return movieSort;
  }  

  export const filterData = (data, condition) => {

    const infoGhibli = data.films;
   
     const movieFilter = infoGhibli.filter(function (films){
   
       return films.director === "Hayao Miyazaki";
     
      //también funciona: return films.director.includes("Hayao Miyazaki");
      
   
     });
     return movieFilter; 
     
     };