import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  return (
  <div className="container">
    <h1>ゴミ（{data.today}）</h1>
    <div className="row">
      <div className="col-md-6">今日のゴミ</div>
      <div className="col-md-3">明日のゴミ</div>
      <div className="col-md-3">明後日のゴミ</div>
    </div>
  </div>
  )
}

export async function getServerSideProps() {
  const dayOfWeekStrJP = [ "日", "月", "火", "水", "木", "金", "土" ];
  const today = new Date();
  const data = {
    today: dayOfWeekStrJP[today.getDay()]
  }
  return {props: {data}};
}