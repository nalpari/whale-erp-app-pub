export default function FindIdContents() {
  return (
    <div className="find-contents-wrap">
      <div className="find-header">
        <div className="find-header-tit">아이디 찾기</div>
        <div className="find-header-desc">회원정보에 등록된 이메일로 아이디를 찾을 수 있습니다.</div>
      </div>
      <div className="find-form">
        <div className="block mb8">
          <input type="text" className="input-frame" placeholder="Name" />
        </div>
        <div className="block">
          <input type="email" className="input-frame" placeholder="Email" />
        </div>
      </div>
      <div className="flex g8">
        <button className="btn-form blue block">취소</button>
        <button className="btn-form login block">ID 찿기</button>
      </div>
    </div>
  )
}