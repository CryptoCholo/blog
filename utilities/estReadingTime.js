exports.readingTime = (article) => {
    
    const Length = article.split(' ').length;
 
    const wordsPerMinute = 220;
    let readingTime = Length / wordsPerMinute;
  
    let timeArr = String(readingTime).split('.');
    let seconds =  (readingTime - timeArr[0]) * 0.6
    
    seconds = +seconds.toFixed(1);
   
    let val = String(seconds).split('.')[1] >= 5 ? 1 : 0;

    let minutes = Number(timeArr[0]) + Number(val);

    return minutes;
}

