import { useParams } from "./params"

export function Page() {
  const {background} = useParams()
  return (
    <>
      {background && <div>
        <div
          className="inset-0 h-120vh absolute -z-2"
          style={{
            backgroundImage: 'url("totorobig.webp")',
            backgroundSize: 'cover',
          }}
        >
          <div className="bg-gradient-to-b from-transparent to-#143b36 h-full" />
        </div>
        <div
          className="inset-0 top-120vh h-100vh absolute -z-2"
          style={{
            backgroundImage: 'url("kiki.webp")',
            backgroundSize: 'cover',
          }}
        >
          <div className="bg-gradient-to-t from-transparent to-#426990 h-full" />
        </div>
      </div>}
      <div className="space-y-32 p-8">
        <header className="max-w-prose mx-auto flex flex-col gap-3 h-66vh contrasted">
          <img src="totoro-title.svg" />
          <h2 className="font-spumoni text-5xl">
            Studio Ghibli Inspired Tokens
          </h2>
          <div>
            Inspired by Miyazaki Hayao and Studio Ghibli and it's works. A
            dedicated series of 2 tokens
          </div>
        </header>
        <footer className="max-w-prose lg:max-w-6xl mx-auto flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col gap-3 max-w-prose h-66vh contrasted">
            <h2 className="font-spumoni text-5xl font-normal">
              My Neighbor Totoro
            </h2>
            <p>
              As the sisters explore their new home, they encounter and befriend
              playful spirits in their house and the nearby forest, most notably
              the massive cuddly creature known as Totoro.
            </p>
            <p className="text-xl font-bold">Join the community today!</p>
            <p>$TOTORO/SOL CA</p>
            <code className="text-sm">
              E1bcNNEiyiTGYuxbNWMsd54tom5WhWXPA6Z1G1QfsQ8d
            </code>
            <div className="flex gap-4">
              <a href="https://x.com/the_ghibli">
                <img
                  id="x-icon"
                  src="x-icon.svg"
                  alt="Twitter"
                  className="w-10"
                />
              </a>
              <a href="https://t.me/theghibli_totoro">
                <img
                  id="telegram-icon"
                  src="telegram-icon.svg"
                  alt="Telegram"
                  className="w-10"
                />
              </a>
              <a href="https://www.dextools.io/app/en/solana/pair-explorer/9yx5tmSrMuNezRHt5hKKXN5e7JnC9gDjUyn7cce9W7tF?t=1712720872104">
                <img
                  id="dextools-icon"
                  src="dextools-icon.png"
                  alt="DexTools"
                  className="w-10"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-prose h-66vh contrasted">
            <h2 className="font-harrington text-4xl">
              KiKi's Delivery Service
            </h2>
            <p>
              A young witch, on her mandatory year of independent life, finds
              fitting into a new community difficult while she supports herself
              by running an air courier service.
            </p>
            <p className="text-xl font-bold">Join the community today!</p>
            <p>$KIKI/SOL CA</p>
            <code className="text-sm">
              H6CZFHkTB6wqhkpry1j2oZfYwWm8kAEQZHTiPtqa4Jze
            </code>
            <div className="flex gap-4">
              <a href="https://x.com/theghibli_kiki">
                <img
                  id="x-icon"
                  src="x-icon.svg"
                  alt="Twitter"
                  className="w-10"
                />
              </a>
              <a href="https://t.me/ghibli_kiki">
                <img
                  id="telegram-icon"
                  src="telegram-icon.svg"
                  alt="Telegram"
                  className="w-10"
                />
              </a>
              <a href="https://www.dextools.io/app/en/solana/pair-explorer/9yx5tmSrMuNezRHt5hKKXN5e7JnC9gDjUyn7cce9W7tF?t=1712720872104">
                <img
                  id="dextools-icon"
                  src="dextools-icon.png"
                  alt="DexTools"
                  className="w-10"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
