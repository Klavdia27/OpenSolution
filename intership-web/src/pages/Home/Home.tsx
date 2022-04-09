import React, { useCallback, useEffect, useState } from 'react';
import cs from 'classnames';
import { useAppDispatch, useAppSelector } from 'Src/hooks';
import { doLogout } from 'Src/models/identity/slice';
import { Button } from 'Common/UI/Button';
import { Input } from 'Src/UIElements/Input';
import { fetchOrg } from 'Src/models/organization/slice';
import { TodoListOrg } from './component/TodoListOrg/TodoListOrg';

import styles from './styles.module.scss';
import icon from './assets/icon-auth.png';
import { Modal } from './modal/Modal';
import { useTodos } from './hooks/useTodos';

type Todo = {
  id: number;
  name: string;
  address: string;
  inn: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;

interface TodoListProps {
  items: Array<Todo>;
  todos: Array<Todo>;
  title: string;
}
type Props = {
  someProp?: any;
};

export const HomePage: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const orgs = useAppSelector((state) => state.org);
  // console.log(orgs);

  const handleLogout = useCallback(() => {
    dispatch(doLogout());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchOrg());
  }, [dispatch]);

  const {
    nameOrgTodo,
    addressOrgTodo,
    innOrgTodo,
    handleChangeOrgName,
    handleChangeOrgAddress,
    handleChangeOrgInn,
    handleSubmit,
  } = useTodos({});

  return (
    <div>
      <div>
        <footer className={cs(styles.footer)}>
          <img className={cs(styles.icon)} src={icon} alt="icon-auth" />
          <Button className={cs(styles.button_footer, styles.button)} onClick={handleLogout}>
            Logout
          </Button>
        </footer>
        <div className={cs(styles.org)}>
          <div className={cs(styles.btns)}>
            <Button className={cs(styles.button_back, styles.button)}>Back</Button>
            <Button
              className={cs(styles.button_add_org, styles.button)}
              onClick={() => setShowModal(true)}
            >
              Add Organization
            </Button>
          </div>
          <div className={cs(styles.table)}>
            <div className={cs(styles.table_ID)}>ID</div>
            <div className={cs(styles.table_name)}>name</div>
            <div className={cs(styles.table_address)}>address</div>
            <div className={cs(styles.table_inn)}>INN</div>
            <div className={cs(styles.table_action)}>Actions</div>
          </div>
          <TodoListOrg items={orgs} />
        </div>
      </div>

      {showModal && (
        <Modal title="Add Organization" onClose={() => setShowModal(false)}>
          <form className={cs(styles.form_addtodo)}>
            <div className={cs(styles.form_boby)}>
              <div>Organization Name</div>
              <Input
                value={nameOrgTodo}
                name="nameOrgTodo"
                type="text"
                onChange={handleChangeOrgName}
              />
              <div>Organization Address</div>
              <Input
                value={addressOrgTodo}
                name="addressOrgTodo"
                type="text"
                onChange={handleChangeOrgAddress}
              />
              <div>Organizations INN</div>
              <Input
                value={innOrgTodo}
                name="innOrgTodo"
                type="text"
                onChange={handleChangeOrgInn}
              />
            </div>
            <div className={cs(styles.form_footer)}>
              <Button onClick={() => setShowModal(false)} className={cs(styles.btn_canceltodo)}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} className={cs(styles.btn_addtodo)}>
                Add
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};
