import React from 'react';
import {
  Lightbulb,
  Droplet,
  Utensils,
  Bike,
  ShoppingBag,
  Recycle,
  ToyBrick,
  MessageCircle,
  TreeDeciduous,
} from 'lucide-react';

type Item = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

function DecarbonisationGrid() {
  const size = '48';
  // 子ども向け脱炭素アクション
  const items: Item[] = [
    {
      id: 1,
      title: '電気をこまめに消そう',
      description:
        '使っていない部屋の電気を消したり、テレビを見ないときは消したりするだけで、地球にやさしくなるよ。おうちから出るときは、電気が消えているか確認してみよう！',
      icon: <Lightbulb className="h-12 w-12 text-yellow-400" size={size} />,
    },
    {
      id: 2,
      title: '水を大切に使おう',
      description:
        '歯を磨くときは水を出しっぱなしにしないで。お風呂の水も家族でシェアすると水の節約になるよ。水を節約すると、水を作るときに使う電気も減って一石二鳥だよ。',
      icon: <Droplet className="h-12 w-12 text-blue-400" size={size} />,
    },
    {
      id: 3,
      title: '食べ物を残さず食べよう',
      description:
        '食べ物を作るのにもたくさんのエネルギーが使われているから、残さず食べることは地球を守ることにつながるよ。食べられる分だけもらうようにしよう。',
      icon: <Utensils className="h-12 w-12 text-orange-400" size={size} />,
    },
    {
      id: 4,
      title: '植物を育てよう',
      description:
        '植物は二酸化炭素を吸って、私たちが呼吸する酸素を出してくれるよ。お家やベランダで小さな植物を育てることから始めてみよう！',
      icon: <TreeDeciduous className="h-12 w-12 text-green-500" size={size} />,
    },
    {
      id: 5,
      title: '歩いたり自転車に乗ったりしよう',
      description:
        '近くの場所に行くときは、車ではなく歩いたり自転車に乗ったりしよう。体も丈夫になって、地球にも優しいよ。',
      icon: <Bike className="h-12 w-12 text-purple-500" size={size} />,
    },
    {
      id: 6,
      title: 'マイバッグを使おう',
      description:
        'お買い物に行くとき、プラスチックの袋をもらうのではなく、自分のバッグを持っていこう。ごみが減るし、海のいきものも守れるよ。',
      icon: <ShoppingBag className="h-12 w-12 text-pink-400" size={size} />,
    },
    {
      id: 7,
      title: 'ごみをきちんと分別しよう',
      description:
        'ごみは正しく分けて捨てよう。リサイクルできるものは資源として生まれ変わって、新しく作るエネルギーを節約できるよ。',
      icon: <Recycle className="h-12 w-12 text-green-600" size={size} />,
    },
    {
      id: 8,
      title: 'ものを大切に使おう',
      description:
        'おもちゃや文房具など、自分の持ちものを大切に使おう。壊れたらすぐに捨てるのではなく、直して使うことも考えてみよう。',
      icon: <ToyBrick className="h-12 w-12 text-gray-600" size={size} />,
    },
    {
      id: 9,
      title: 'エコについて話そう',
      description:
        '学校や家で、地球環境について友達や家族と話し合おう。みんなでアイデアを出し合うと、新しい取り組みが見つかるかもしれないよ。',
      icon: <MessageCircle className="h-12 w-12 text-blue-500" size={size} />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-center text-3xl font-bold">
        今日がんばったこと
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            <div className="flex h-40 items-center justify-center bg-gray-100">
              <span className="text-3xl text-gray-400">{item.icon}</span>
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-center">
                <div className="mr-3 rotate-12 transform rounded-full bg-white p-2 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-green-700">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DecarbonisationGrid;
