let bio = {
  name : "dinesh",
  dept : "IT",
  getBio: function(){
    return `hii ${this.name} and ${this.dept}`
  }
}
// const {dept,name:fname} = bio
// console.log(fname,dept);
const str =  bio.getBio()
console.log(str);

//cannot access this keyword in arrow function