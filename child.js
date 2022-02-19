// child.js
console.log( "child.js started"); //  stdout
setTimeout( finish, 10000);
function finish() {
    console.log( "child.js: finish() call");  //  stdout 
    console.error("child exit using code 1"); //  stderr
    process.exit(1);
}