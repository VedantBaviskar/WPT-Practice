class Account
{

constructor(fname,lname,amt)
{  
alert(new.target)
if (new.target === Account) 
 {
throw new TypeError("Cannot construct Abstract instances directly");
     } 
this.firstname=fname;
this.lastname=lname;
this.balance=amt;
}  
set firstname(value) {this._fnm=value;}
get firstname(){ return this._fnm;}

set balance(value) {this._bal=value;}
get balance(){ return this._bal;}

set lastname(value) {this._lnm=value;}
get lastname(){ return this._lnm;}
deposit(amt)
{     this.balance+=amt;   }
toString() {  return  this.firstname+ "  " + this.lastname+" "+this.balance}
}


class Savingaccount extends Account
{ 
   constructor(acctype,fname,lname,amt)
  { super(fname,lname,amt)
    this.type=acctype;
  
    }
withdraw(amt)
{     const minbal=1000;
      if(amt>(this.balance-minbal))
     throw  new TypeError("err");
this.balance-=amt;

    }
}
var Aobj=new  Account ("Raj","Mathur",2000) ;//ERRRR

var obj=new  Savingaccount ("sav","Raj","Mathur",2000)
obj.deposit(2000);
document.write(obj);
obj.withdraw(3000);
document.write(obj);
