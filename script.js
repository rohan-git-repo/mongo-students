const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/students')

	.then(() => console.log('database connected successfully'))

	.catch((e) => console.log('not connected', e))



const details = new mongoose.Schema({

	id: Number,

	name: String,

    class: Number,

    subjects: String,

	grade: Number	

})
const activity = new mongoose.Schema({

	id: Number,

	name: String,

    class: Number,

	activities: String,

	achievments: String

})

const studentDetails = new mongoose.model('studentDetails', details);
const studentActivity = new mongoose.model('studentActivity', activity);

const data= new studentDetails({

	id: 0,

	name:'Mohit',

	class:12,

    subjects: "Physics",
            
    grade: 8

	// active:true

})

data.save();
const datas= new studentActivity({

	id: 0,

	name:'Mohit',

	class:12,

    activities: "Football",
            
    achievments: "Midfielder in the team"


	// active:true

})

datas.save();

const createDocument = async () => {

	try {

    	const allData = await studentDetails.create([

        	{

                id: 1,

                name: "Rohan",
            
                class: 11,
            
                subjects: "Physics",
            
                grade: 8
                
                // active: true

        	},

        	{
                id: 2,

                name: "Aman",
            
                class: 11,
            
                subjects: "Physics",
            
                grade: 9
                
                // active: true

        	},

        	{

                id: 3,

                name: "Mohan",
            
                class: 10,
            
                subjects: "English",
            
                grade: 8
                
                // active: true

        	}

    	])

        const nllData = await studentActivity.create([

        	{

                id: 1,

                name: "Rohan",
            
                class: 11,
            
                activities: "Football",
            
                achievments: "Midfielder in the team"
                
                // active: true

        	},

        	{
                id: 2,

                name: "Aman",
            
                class: 11,
            
                activities: "Basketball",
            
                achievments: "Captain of the team"
                
                // active: true

        	},

        	{

                id: 3,

                name: "Mohan",
            
                class: 10,
            
                activities: "Racing",
            
                achievments: "Came first in Annual event"
                
                // active: true

        	}

    	])


	}

	catch(e){

    	console.log('error');

	}

}
createDocument();

const getDocument=async()=>{

	const result=await studentDetails.find({name:'Rohan'});

	const result2=await studentActivity.find({class:11});

    const x=await studentDetails.updateMany({ id: 0 },{ $set: { subjects: 'Biology' }},{new:true});
    const result3=await studentDetails.find({id:0});
    
    
    const y = await studentDetails.deleteMany({id:2});    
    //read operation
	console.log(result);
    console.log(result2);
    //update operation
    console.log("updated id 0 of student details\n",result3)
    //delete operation
    console.log("deleted id 2 of student details \n",y);

}

getDocument();
