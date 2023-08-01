const { execSync } = require("child_process");
export default class AdbCommandsUtils {
    runAdbCommand(command) {
        try{
            execSync(command, {stdio: 'inherit'});                  
        } catch (error) {
            console.error(`Error executing command: ${error.message}`);
            process.exit(1);
        }
    }
}
