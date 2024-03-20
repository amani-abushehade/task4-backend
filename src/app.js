
const mongodb = require ('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb+srv://abushehadaamani:aa-22-2-2005@cluster0.csnc52t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const dbname = 'project1' 

mongoClient.connect (connectionUrl , (error , res)=>{
if (error) {
 return console.log('error has occured')
}
console.log('all perf')

const db = res.db(dbname)


db.collection ('users').insertMany([
 {
    name : 'amani',
    age : 19
 },
 {
    name : 'ahlam',
    age : 24
 },
 {
    name : 'ajwad',
    age : 17
 },
 {
    name : 'ahmed',
    age : 30
 },
 {
    name : 'idrees',
    age : 17
 }
] , (error,data)=>{
 if(error){
     console.log("Unable to insert data")
 }

})
   
db.collection('users').findOne({_id:mongodb.ObjectId("65fae37076583bad81745226")}
, (error,user)=>{
 if(error){
    console.log("Unable to insert data")
    }
    console.log(user)
})


db.collection('users').find({age:17}).toArray((error,users)=>{
if(error){
  return console.log('Error has occurred')
}
  console.log(users)
})


db.collection('users').find({age:19}).count((error,users)=>{
if(error){
  return console.log('Error has occurred')
}
  console.log(users)
})


})