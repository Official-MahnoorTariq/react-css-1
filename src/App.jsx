import Boxes from "./components/Boxes";
import Row from "./components/Row";
import Rows from "./components/Rows";

export default function App(){
  return(
    <>
    <div class="chessboard">
      <Rows/>
      <Boxes/>
      <Row/>
</div>
    </>
  );
}