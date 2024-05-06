import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, botFunction}) {
 
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots?.map((bot) => (
          <BotCard key={bot.id} bot={bot} botFunction={botFunction}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;