import {QRCode,Image, Space,Typography} from "antd";
import Img from '../assets/P2.jpg';
import "../styles/Qrcode.css";

function QrCode () {
    return<div className="QR"> 
     
<Space  direction="vertical">
<Typography.Title level={4} ><h1 className="h1">This is my Github Qr Code</h1></Typography.Title>
   
<QRCode value="https://github.com/prachiSurya64/MyFirstPRojectOnGit.git" 
 size={200} 
 icon= {<Image src={Img} alt="My Image" ></Image> }
  color="black"
   bordered={true}
    status="active" 
    onRefresh={()=>{
         console.log("ON Refresh")
}} />
</Space>
    </div>
}

export default QrCode 