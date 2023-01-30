import "./newUser.css";

export const NewUser = () => {
  return (
    <div className="newUser">
         <main className="mt-5 pt-3">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUsersForm">
                 <div className="newUSerItem">
                    <label>Username</label>
                    <input type="text" placeholder="Raheleh "/>
                 </div>
                 <div className="newUserItem">
                    <label>Full name</label>
                    <input type="text" placeholder="Raheleh Bayat"/>
                 </div>
                 <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="raheleh.bayat.92@gmail.com"/>
                 </div>
                 <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                 </div>
                 <div className="newUserItem">
                    <label>Phone</label>
                    <input type="password" placeholder="+49 12345667"/>
                 </div>
                 <div className="newUserItem">
                    <label>Address</label>
                    <input type="password" placeholder="Germany | berlin"/>
                 </div>
                 <div className="newUserItem">
                    <label>Gender</label>
                    <div className="nweUserGender ">
                    <input type="radio" name="gender" id="male" value="male"/>
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female"/>
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other "/>
                    <label for="other">Other</label>
                    </div>
                 </div>
                 <div className="newUserItem">
                  <label>Active</label>
                  <select className="newUserSelect" name="active" id="active">
                     <option value="yes">Yes</option>
                     <option value="no">No</option>
                  </select>
                 </div>
            </form>
            <button className="newUserButton">create</button>
         </main>
    </div>
  )
}
 