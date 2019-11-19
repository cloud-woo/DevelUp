var days = new Array( 'TIME','MON', 'TUE', 'WED','THU','FRI','SAT' );
document.write("<tr>");
for(var i=0;i<days.length;i++){
    document.write("<th>");
    document.write(days[i]);
    document.write("</th>");
}
document.write("</tr>");





var start_time = 9; //9시부터 시작
var end_time= 8; //8시까지 
var total = (12-start_time)+end_time; //총 시간
document.write(total);
var row = total*2; // 행 
var colunm = 7;  // 열 

for(var i=0;i<row;i++){ 
    document.write("<tr>");
    for(var j=0;j<colunm;j++){
        if(j==0){
            document.write("<td id=\""+days[j]+i+"\">");   //주의
            var condition = i%2==0 ?  start_time++ :" ";
            document.write(condition);  //시간 입력해야 함
        }
        else {
            document.write("<td id=\""+days[j]+i+"\">");   //주의
            document.write(days[j]+i)
        }

        // document.write("[ "+i+", "+j+" ]");
        
        document.write("</td>");
    
    }
    document.write("</tr>");
}