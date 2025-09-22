import SmallButton from "@/components/Button/SmallButton";
import { Link } from "react-router-dom";

function Items() {
  return (
    <>
      <div>
        <div>판매 중인 상품</div>
        <div>
          <input type="text" />
          <Link to="/registration">
            <SmallButton>상품 등록하기</SmallButton>
          </Link>
          <select>
            <option default>최신순</option>
            <option>좋아요순</option>
          </select>
        </div>
      </div>
      <div></div>
      <div></div>
    </>
  );
}

export default Items;
