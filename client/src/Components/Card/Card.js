import React, { useMemo , useState} from "react";
import DeyDetails from "../DayDetails/DayDetails";
import Image from "../Icon/Icon";
import style from "./Card.module.scss";


const Card = ({ weather }) => {
  
  const [period, setPeriod] = useState(0);
  const weatherPerDay = weather?.data?.list?.slice(0, 4,)

  const periodInfo = useMemo(() => {
      if (Array.isArray(weatherPerDay)) {
      return weatherPerDay[period];
    } 
    return null;
  }, [period])

  return (
    <div>
      {weatherPerDay?.map((period, index) => (
        <div onClick={() => {
          setPeriod(index);
        }}>
            <Image desc={period?.weather[0]?.description}/>
          <div key={period.id}>
            {period.main?.temp}
          </div>
          <div key={ period.day}>
            {period.weather[0]?.description}
          </div>
      </div>
      ))}
      <DeyDetails data={periodInfo}/>
    </div>
  );
};

export default Card;
