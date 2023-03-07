import { useState } from 'react';
import User from "./User";
import UserDetails from './UserDetails';
import { getById } from '../services/userService';
import CreateOrEditUser from './CreateOrEditUser';
import DeleteUser from './DeleteUser';


const UsersTable = ({ 
  users,
  onUserCreateSubmit,
  onUserDelete,
  onUserEditSubmit
 }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(null);

  const onInfoClick = async(userId) => {
    const user = await getById(userId)
    setSelectedUser(user);
  }

  const onClose = () => {
    setSelectedUser(null);
    setShowAddUser(false);
    setShowDeleteUser(false);
    setShowEditUser(null);
  }

  const onAddUserClick = () => {
    setShowAddUser(true);
  };

  const onCreateUserSaveClick = (e) => {
    onUserCreateSubmit(e);
    setShowAddUser(false);
  };

  const onDeleteClick = (userId) =>{
    setShowDeleteUser(userId);
  }

  const onDeleteHandler = () => {
    onUserDelete(showDeleteUser);
    onClose();
  }

  const onEditClick = async(userId) => {
    const user = await getById(userId);

    setShowEditUser(user);
  }

  const onUserEditSubmitHandler = (e, userId) => {
    onUserEditSubmit(e, userId);
    setShowEditUser(null);
    //onClose();
  };

    return(
      <>
      <div className="table-wrapper">

      {selectedUser && <UserDetails {...selectedUser} onClose={onClose} />}
      {showAddUser && <CreateOrEditUser onClose={onClose} onUserCreateSubmit={onCreateUserSaveClick} />}
      {showDeleteUser && <DeleteUser onClose={onClose} onDelete={onDeleteHandler} />}
      {showEditUser && <CreateOrEditUser user={showEditUser} onClose={onClose} onUserCreateSubmit={onUserEditSubmitHandler} />}
        <table className="table">
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>
                First name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Last name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Phone<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Created
                <svg className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {users.map(u => 
            <User 
              key={u._id} {...u} 
              onInfoClick={onInfoClick}
              onDeleteClick={onDeleteClick}
              onEditClick={onEditClick}
            />
            )}
    
          </tbody>
        </table>
        </div>
        <button className="btn-add btn" onClick={onAddUserClick}>Add new user</button>
      </>
    );
};

export default UsersTable;