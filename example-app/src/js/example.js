import { AppConfigPlugin } from 'intune-mdm-plugin';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    AppConfigPlugin.echo({ value: inputValue })
}
