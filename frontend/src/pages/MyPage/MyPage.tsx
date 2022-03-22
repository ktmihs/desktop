import ReservationList from 'components/Reservation/Reservation';
import { useMemo, useState, useCallback } from 'react';
import SignOut from './MyPage.style';
import Profile from 'components/UserInfo/Profile';

const MyPage = () => {
  const [isEditing, setEditingMode] = useState<boolean>(false);

  const handleEditingMode = useCallback(isEditing => setEditingMode(!isEditing), []);

  const MemoizedProfile = useMemo(
    () => <Profile isEditing={isEditing} handleEditingMode={handleEditingMode} />,
    [isEditing],
  );

  const MemoizedReservationList = useMemo(() => <ReservationList />, [ReservationList]);
  const MemoizedSignOut = useMemo(
    () => <SignOut>{isEditing ? <button className="submit">회원탈퇴</button> : ''}</SignOut>,
    [isEditing],
  );

  return (
    <>
      {MemoizedProfile}
      {MemoizedReservationList}
      {MemoizedSignOut}
    </>
  );
};

export default MyPage;
