import user from '../user';
import data from '../data';
import friends from '../friends';
import transactions from '../transactions';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(163, 244, 217)',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
