import userNameStore from "../../../module/userNameStore";

function tutorialMessages() {
  const userName = userNameStore((state) => state.name);

  return [
    {
      speaker: "john",
      type: "당신이 말하고 있습니다..",
      text: "여보세요 존?",
    },
    {
      speaker: "me",
      type: "존이 당신에게 말하고 있습니다..",
      text: `어, ${userName}? 오랜만이네, 무슨일이야?`,
    },
    {
      speaker: "john",
      type: "당신이 말하고 있습니다..",
      text: "명왕성으로 갔다는 연락을 받았어.",
    },
  ];
}

export default tutorialMessages;
