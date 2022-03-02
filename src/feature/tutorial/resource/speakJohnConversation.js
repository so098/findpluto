import userNameStore from "../../../module/userNameStore";

function speakJohnConversation() {
  const userName = userNameStore((state) => state.name);

  return [
    {
      type: "존이 당신에게 말하고 있습니다.",
      to: 1,
      content: `역시 박사님께 연락받았구나 솔직하게 말해줘서 고마워 ${userName} 하지만 난 예전부터 명왕성의 퇴출에 대해서 항상 의문을 가져왔어 명왕성이 가장 작은 행성이긴 하지만 현재 행성계에 있는 행성들과 질량은 같아 하지만 지금 문서에 질량을 잘못 적어놨다고! 내가 예전 문서에서 본 명왕성의 질량과 현재 질량이 다르단 말이야 내가 직접 재서 그걸 증명해 보이겠어`,
    },
    {
      type: "존이 당신에게 말하고 있습니다.",
      to: 4,
      content:
        "가족들은 보고싶지 하지만 난 수십년동안 이 사실을 너무 궁금해했다고 그래서 나사로 들어온 거라 지금 돌아갈 생각은 없어",
    },
    {
      type: "존이 당신에게 말하고 있습니다.",
      to: 5,
      content:
        "내가 사전조사를 하지 않았다고...? 잘못작성한 거라면 충격적인데...",
    },
    {
      type: "존이 당신에게 말하고 있습니다.",
      to: 2,
      content:
        "내가 찾는다고 해결될 문제가 아니라니 그럼 잘못된것을 그대로 냅두라는 거야?",
    },
    {
      type: "존이 당신에게 말하고 있습니다.",
      to: 8,
      content:
        "..난 지금 바다가 있는 곳에 있어 이 것만 알려줄게 너무 충격을 받아서 잠시 쉬어야 겠어 연락 그만할게",
    },
    {
      type: "존이 당신에게 말하고 있습니다.",
      to: 11,
      content:
        ".. 좋아 내위치를 알려줄게 같이 가자 난 지금 바다 근처에 있고 빛이 들어오는 면에 있어 깃발을 꽂아 둘테니 거기로 와줘",
    },
    {
      type: "존이 당신에게 말하고 있습니다.",
      to: 3,
      content: `실망이야 ${userName} 예전부터 너는 좋은 동료라고 믿고 있었는데..`,
    },
    {
      type: "존이 당신에게 말하고 있습니다.",
      to: 9,
      content:
        "...반박자료가 많다고? 그래 한번 날 찾아봐 나는 지금 바다 근처에 있고 빛의 반대편에 있어날 찾으면 너의 의견에 동의해 줄 수 지도 모르지",
    },
    {
      type: "존이 당신에게 말하고 있습니다.",
      to: 11,
      content: `${userName}, 난 그런 것을 꿈꾸러 나사를 들어온게 아니야 우린 지금 바라보는 방향이 다른 거같아 이만 연락 끊을게 잘지내`,
    },
    {
      type: "존이 당신에게 말하고 있습니다.",
      to: 11,
      content: `갑자기 동의한다고 말하니 믿음이 가질 않네 ${userName}.. 날 설득시키고 싶은건 알겠지만 난 찾아야 할 게 많아 시간이 없어 이만 끊을게`,
    },
    {
      type: "존이 당신에게 말하고 있습니다.",
      to: 10,
      content:
        "...너의 말을 들어보니 맞는 것 같네 사람들의 선동도 신경써야 하는데 너무 사실에 근거할 자료를 찾겠다고 섣불리 왔던 것 같아 같이 돌아가자 난 지금 바다가 있는 면에 있고 빛의 반대편에 있어 깃발을 꽂아둘게 거기로 와줘 부탁할게.",
    },
  ];
}

export default speakJohnConversation;
