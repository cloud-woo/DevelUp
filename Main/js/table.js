var days = new Array( '','MON', 'TUE', 'WED','THU','FRI','SAT' );
document.write("<tr>");
for(var i=0;i<days.length;i++){
    // document.write("<th id=\"+days"+i+"\" >");
    document.write("<th class=\"days\">");
    document.write(days[i]);
    document.write("</th>");
}
document.write("</tr>");


var start_time = 9; //9시부터 시작
var end_time= 7; //8시까지 

var total = (12-start_time)+end_time; //총 시간 

var row = total*2; // 행 
var colunm = 7;  // 열 

for(var i=0;i<row;i++){ 
    document.write("<tr>");
    for(var j=0;j<colunm;j++){

        if(j==0){ //Time 속성
            if(i%2==0){
                document.write("<td class = \"time\" rowspan=\"2\">"+start_time++ +"</td>");
                //클래스명 : time, 
            }
        }
        else { 
            document.write("<td id=\""+days[j]+i+"\""); //MON1 MON2 MON3
            if(i%2==1){ //2줄마다 색상
                document.write(" style=\"border-bottom: 1px solid rgb(226, 225, 225);\"");
            }
                document.write(">");
                document.write(days[j]+i);
      
        }

        // document.write(days[j]+i); 이렇게 하면 Time 속성가지
        
        document.write("</td>");
    
    }
    document.write("</tr>");
}