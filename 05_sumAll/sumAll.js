const sumAll = function(start, end) {
    let result=0;
    if (typeof start!='number'||typeof end !='number'||start<0||end<0||start%1!=0||end%1!=0){
        return 'ERROR';
    }
    if(start>end){
        let temp=start;
        start=end;
        end=temp;
    }
    for(let index=start;index<=end;index++){
        result+=index;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
