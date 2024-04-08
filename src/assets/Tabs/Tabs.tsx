import React, { useState, memo } from 'react';
import './Tabs.scss'

interface Tab {
  id: number;
  title: JSX.Element;
  content: JSX.Element;
}

interface TabsProps {
}

const TabsComponent: React.FC<TabsProps> = () => {


 

  return (
    <div id="Tab">
      <div className='BWZ'>
      <div id="Blocks1Wrap">
        <div id="TabsSP1">
        <span>Методика обучения двухмесячными спринтами: краткосрочно, эффективно, практично</span>
        </div>
        </div>
        </div>

      <div className='BWZ'>
        <div id="Blocks2Wrap">
        <div id="TabsSP2">
        <span>От текущего уровня до свободного говорения простым языком за 2 месяца</span>
        </div>
        </div>
        </div>

      <div className='BWZ'>
        <div id="Blocks3Wrap">
        <div id="TabsSP3">
        <span>Учащиеся начинают говорить и перестают бояться говорить</span>
        </div>
        </div>
        </div>
    </div>
  );
};

export const Tabs = memo(TabsComponent);
