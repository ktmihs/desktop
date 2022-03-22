import ReservationList from 'components/Reservation/Reservation';
import { useMemo, useState, useCallback } from 'react';
import { useAppSelector } from 'src/contexts/state.type';
import { selectAuth } from 'src/contexts/auth';
import SignOut from './MyPage.style';
import Profile from 'components/UserInfo/Profile';

const MyPage = () => {
  const [isEditing, setEditingMode] = useState<boolean>(false);
  const { id, nickname, email } = useAppSelector(selectAuth);
  // userId로 user 데이터 받아오기

  const handleEditingMode = useCallback(isEditing => setEditingMode(!isEditing), []);

  const MemoizedProfile = useMemo(
    () => <Profile isEditing={isEditing} handleEditingMode={handleEditingMode} user={{ id, nickname, email }} />,
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