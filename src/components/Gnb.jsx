import React from 'react';

function Gnb(props){
  return(
    <nav>
    <ul class="gnb">
      <li><a href="/">긴급분양</a></li>
      <li class="on"><a href="/">애견분양</a></li>
      <li><a href="/">무료분양</a></li>
      <li><a href="/">애견정보</a></li>
    </ul>
  </nav>
  );
}

export default Gnb;