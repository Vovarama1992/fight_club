'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useData } from '@/controllers/context';
import { useRouter } from 'next/navigation';
import { Progress } from '@radix-ui/react-progress';
import MenuButton from '@/components/menu-drawer';

import Wrapper from './button_wrapper';

export default function Page() {
  const router = useRouter();
  // Context
  const { user, userRank, ranks, leaders, friends, quests } = useData()!;
  const [damage, setDamage] = useState(false);
  const [position, setHead] = useState(0);
  const head = position.toString().padStart(2, '0');
  useEffect(() => {
    let newPosition = 0;
    if (damage) {
      const motion = setInterval(() => {
        setHead((prevPosition) => {
          newPosition = prevPosition + 1;
          return newPosition;
        });
      }, 100);
      setTimeout(() => {
        setDamage(false);
        clearInterval(motion);
      }, 2300);
    }
    return () => setHead(0);
  }, [damage]);

  const isContext = !user || !userRank || !ranks;

  // Handle coin interaction
  /*async function coinInteraction() {
    if (isContext) return;

    if (user.balance >= userRank.required_amount - TAP_PROFIT) {
      const isLevelUpdated = handleNewRank(userRank);
      if (!isLevelUpdated) console.log('PLAYER NOT NEW RANK');
      if (isLevelUpdated) console.log('PLAYER NEW RANK');
    } else {
      const isTapDone = handlePlayerTap(TAP_PROFIT);
    }
  }*/

  if (isContext) return router.replace('/');
  return (
    <main className=" w-[100%] h-[100%] relative hscreen bg-[url(/main_fon.png)] bg-contain bg-cover bg-center bg-no-repeat  flex flex-col relative  z-0">
      <div className=" flex flex-row justify-center z-9999 w-full h-[20%]">
        <div className="flex w-[700px] h-full flex-col items-center  z-9999">
          <div className=" bg-[url(/interface/target-box.png)] mt-[15px]  bg-contain bg-center bg-no-repeat w-[50%] h-[60%]"></div>
          <div className="  bg-[url(/interface/target-progress.png)] mt-[15px]  bg-contain bg-center bg-no-repeat w-[50%] h-[30%]"></div>
        </div>
      </div>

      <div
        id="fight_club"
        className="w-full h-[60%] inline-flex items-start justify-center   z-9999"
      >
        <div id="wrap" className=" flex flex-col z-9999  h-[100%]">
          <div id="in1" className="w-[100%] flex items-end h-[72%] mb-[-30px] ">
            <Image
              src={damage ? '/bear_damage.gif' : '/bear.gif'}
              alt="bear"
              width={100}
              height={190}
              className="w-[100%] h-[190px] z-9999"
            />
          </div>

          <div
            id="in2"
            className="relative w-[auto] flex flex-col items-center justify-center h-[28%] mb-[100px]  z-9999"
          >
            <Image
              alt="head"
              width={100}
              height={100}
              src={
                damage
                  ? `/bee_head/upfront/пчела01-голова вперед меч_${head}.png`
                  : '/bee_head.png'
              }
              className="absolute left-[25%] top-[24%] w-[70px] h-[25%]"
            />
            <Image
              onClick={() => setDamage(true)}
              className="w-[100%] h-[75%] z-9999 ml-[55px]"
              src={damage ? '/bee_attack.gif' : '/bee.gif'}
              alt="bee"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className=" w-full h-[20%] flex  flex-row gap-[2%] items-center justify-center mt-[10px]  z-999">
        <Wrapper>
          <MenuButton
            title={'Leaders'}
            iconURL={'/icons/star.png'}
            size={'sm'}
            isLocked={false}
            section="leaderboard"
            user={user}
            leaders={leaders}
          />
        </Wrapper>

        <Wrapper>
          <MenuButton
            title={'Friends'}
            iconURL={'/icons/email.png'}
            size={'sm'}
            isLocked={false}
            section="friends"
            user={user}
            friends={friends}
          />
        </Wrapper>

        <Wrapper className={'lg:translate-y-[-20px] translate-y-[-10px]'}>
          <MenuButton
            title={'Retreat'}
            iconURL={'/icons/flag.png'}
            size={'sm'}
            isLocked={true}
            section="retreat"
            user={user}
          />
        </Wrapper>

        <Wrapper>
          <MenuButton
            title={'Quests'}
            iconURL={'/icons/notification.png'}
            size={'sm'}
            isLocked={false}
            section="quests"
            user={user}
            quests={quests}
          />
        </Wrapper>

        <Wrapper>
          <MenuButton
            title={'Bonus'}
            iconURL={'/icons/diamond.png'}
            size={'sm'}
            isLocked={false}
            section="bonus"
            user={user}
          />
        </Wrapper>
      </div>
    </main>
  );
}

/* firstLevel = <div

className="w-full flex flex-col justify-between gap-1"
>
<div className="w-full h-14 inline-flex items-center justify-between gap-1.5 px-4 relative">
  <div className="min-w-14 min-h-14 inline-flex items-center justify-center">
    <RankDrawer />
  </div>
  <div className="w-full inline-flex gap-0.5 items-center justify-between">
    <HoneyDisplay amount={user.balance} iconSize={24} />
    <span className="text-xl font-bold text-foreground">/</span>
    <HoneyDisplay amount={userRank.required_amount} iconSize={24} />
    <div className="ml-2">
      <InfoPopover content={'Honey'} />
    </div>
  </div>
</div>
<div className="w-full h-20  bg-center bg-no-repeat bg-contain rounded-xl inline-flex items-center justify-center px-12 relative">
  <TargetStatsCard
    title={'Blue Orc'}
    data={'Level 999'}
    iconMainURL="/icons/skull.png"
    iconDataURL="/icons/shield.png"
    isLocked={false}
  />
  <TargetStatsCard
    title={'HP Heal'}
    data={'Coming soon'}
    isLocked={true}
  />
  <TargetStatsCard
    title={'Treasure'}
    data={'Coming soon'}
    isLocked={true}
  />
</div>

<Progress
  value={400}
  content="Immortal"
  className="bg-[url(/interface/target-box.png)] "
/>

<Progress
  value={100}
  content="Immortal"
  className="bg-[url(/interface/target-progress.png)]"
/>
</div>*/

/*
 <img
                onClick={() => setDamage(true)}
                className="w-[170px] h-[170px] z-9999"
                src={damage ? '/bee_attack.gif' : '/bee.gif'}
                alt="bee"
              />*/
