const arguments = process.argv;
const fs = require('fs');

switch (arguments[2]) {
    case 'read' :{
        const data = fs.readFileSync(arguments[3], 'utf-8');
        console.log(`The data you want is => \n${data}`);
    }
    case 'append':{
        fs.appendFileSync(arguments[4], `\n${arguments[3]}`)
    }
    case 'delete':{
        fs.unlinkSync(arguments[3]);
    }
    case 'create':{
        fs.writeFileSync(arguments[3],'//new file created');
    }
    case 'rename':{
        const oldName = arguments[3];
        const newName = arguments[4];
        try{
            fs.renameSync(`${oldName}`,`${newName}`);
        }catch(err){
            console.log('error while renaming the file');
        }
    }
    case 'list':{

    }
    default :
        return 0;

}




