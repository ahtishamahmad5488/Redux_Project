import {View, Text} from 'react-native';
import {getUserList} from './Redux/action';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.reducer);
  useEffect(() => {
    dispatch(getUserList());
  }, []);
  console.warn('In Component: ', userList);

  return (
    <View>
      {userList.length
        ? userList.map(item => (
            <Text style={{fontSize: 22, color: 'black'}}>{item.firstName}</Text>
          ))
        : null}
    </View>
  );
};

export default UserList;
