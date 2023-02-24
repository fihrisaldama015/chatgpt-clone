import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="h-screen px-2 flex flex-col items-center justify-center text-slate-100">
      <h1 className="text-4xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            {/* icon */}
            <SunIcon className="h-8 w-8" />
            <p>Examples</p>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              "Explain quantum computing in simple terms" &rarr;
            </p>
            <p className="infoText">
              Got any creative ideas for a 10 year old’s birthday? &rarr;
            </p>
            <p className="infoText">
              How do I make an HTTP request in Javascript? &rarr;
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            {/* icon */}
            <BoltIcon className="h-8 w-8" />
            <p>Capabilities</p>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Remembers what user said earlier in the conversation
            </p>
            <p className="infoText">
              Allows user to provide follow-up corrections
            </p>
            <p className="infoText">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center mb-5">
            {/* icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <p>Limitations</p>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
