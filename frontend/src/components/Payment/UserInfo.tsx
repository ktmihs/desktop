import { useState } from "react";
import { FormArticle, Guidance, InputDiv, Necessary, SectionTitle } from "./Payment.style";
import { UserInfoType } from "./Payment.type";

const UserInfo = ({ reservation, setReservation, phone }:UserInfoType) => {
  const [sameUser, setSameUser] = useState<boolean>(false);

  const handleClick = () => {
    setReservation({
      ...reservation,
      phone: !sameUser ? phone : ''
    })

    setSameUser(!sameUser)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReservation({
      ...reservation,
      [e.target.id]: e.target.value
    })
  }

  return (
    <FormArticle>
      <SectionTitle>
        이용자 정보<Necessary>*</Necessary>
      </SectionTitle>
      <Guidance>상품 이용 시 필요한 필수 정보입니다.</Guidance>
      <section>
        <input type="checkbox" id="sameUser" onClick={handleClick} />
        <label htmlFor="sameUser">예약자 정보와 동일합니다.</label>
      </section>
      <section>
        <label htmlFor="username">
          성명<Necessary>*</Necessary>
        </label>
        <InputDiv>
          <input type="text" id="username" value={reservation.username || ''} onInput={handleInput} placeholder="성명을 입력해주세요" />
        </InputDiv>
      </section>
      <section>
        <label htmlFor="phone">
          휴대폰 번호<Necessary>*</Necessary>
        </label>
        <InputDiv>
          <input type="tel" id="phone" value={reservation.phone || ''} onInput={handleInput} placeholder="휴대폰 번호를 입력해주세요" />
        </InputDiv>
      </section>
    </FormArticle>
  )
}

export default UserInfo;