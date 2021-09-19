import React from 'react';

import BooksPanel from './BooksPanel';

function Profile({ user, setUser }) {

  function handleLogout() {
    console.log("inside handleLogout, before DELETE request, user: ", user);
    fetch("/logout", {
      method: "DELETE"
    })
      .then(() => {
        setUser(null);
        console.log("inside first and only .then after user is set to null, user: ", user);
      });
  }

  const displayUser = () => {
    if (user) {
      return (
        <main className="profile">
          <p>{user.firstname} {user.lastname}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.password_digest}</p>
          <button onClick={handleLogout}>Logout</button>
          <BooksPanel user={user} />
        </main>
      );
    }
  }

  return (
    <>
      {displayUser()}
    </>
  );
}

export default Profile;
