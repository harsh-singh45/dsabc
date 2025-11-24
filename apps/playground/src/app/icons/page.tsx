'use client'

export default function IconsPage() {
  const iconLibraries = [
    {
      name: 'Heroicons',
      package: 'hi',
      icons: 460,
      version: '1.0.6',
      description: 'Hand-crafted SVG icons',
      url: 'https://heroicons.com/',
      currentlyUsed: true,
    },
    {
      name: 'BoxIcons',
      package: 'bi',
      icons: 1634,
      version: '2.1.4',
      description: 'Simple vector icons',
      url: 'https://boxicons.com/',
      currentlyUsed: true,
    },
    {
      name: 'Heroicons 2',
      package: 'hi2',
      icons: 972,
      version: '2.1.3',
      description: 'Outline and solid variants',
      url: 'https://heroicons.com/',
      currentlyUsed: false,
    },
    {
      name: 'Lucide',
      package: 'lu',
      icons: 1541,
      version: 'v5.1.0',
      description: 'Beautiful consistent icons',
      url: 'https://lucide.dev/icons/',
      currentlyUsed: false,
    },
    {
      name: 'Feather',
      package: 'fi',
      icons: 287,
      version: '4.29.1',
      description: 'Simply beautiful icons',
      url: 'https://feathericons.com/',
      currentlyUsed: false,
    },
    {
      name: 'Phosphor Icons',
      package: 'pi',
      icons: 9072,
      version: '2.1.1',
      description: 'Flexible icon family',
      url: 'https://phosphoricons.com/',
      currentlyUsed: false,
    },
    {
      name: 'Tabler Icons',
      package: 'tb',
      icons: 5754,
      version: '3.2.0',
      description: 'Consistent stroke design',
      url: 'https://tabler.io/icons',
      currentlyUsed: false,
    },
    {
      name: 'Material Design Icons',
      package: 'md',
      icons: 4341,
      version: '4.0.0',
      description: 'Google Material Design',
      url: 'https://fonts.google.com/icons',
      currentlyUsed: false,
    },
    {
      name: 'Font Awesome 6',
      package: 'fa6',
      icons: 2048,
      version: '6.5.2',
      description: 'Industry standard icons',
      url: 'https://fontawesome.com/icons',
      currentlyUsed: false,
    },
    {
      name: 'Bootstrap Icons',
      package: 'bs',
      icons: 2716,
      version: '1.11.3',
      description: 'Official Bootstrap icons',
      url: 'https://icons.getbootstrap.com/',
      currentlyUsed: false,
    },
    {
      name: 'Remix Icon',
      package: 'ri',
      icons: 3020,
      version: '4.2.0',
      description: 'Neutral style system',
      url: 'https://remixicon.com/',
      currentlyUsed: false,
    },
    {
      name: 'Ant Design Icons',
      package: 'ai',
      icons: 831,
      version: '4.4.2',
      description: 'Enterprise UI icons',
      url: 'https://ant.design/components/icon',
      currentlyUsed: false,
    },
    {
      name: 'Ionicons 5',
      package: 'io5',
      icons: 1332,
      version: '5.5.4',
      description: 'Premium designed icons',
      url: 'https://ionic.io/ionicons',
      currentlyUsed: false,
    },
    {
      name: 'css.gg',
      package: 'cg',
      icons: 704,
      version: '2.1.1',
      description: 'Pure CSS icons',
      url: 'https://css.gg/',
      currentlyUsed: false,
    },
    {
      name: 'Radix Icons',
      package: 'rx',
      icons: 318,
      version: '1.3.0',
      description: 'Crisp UI icons',
      url: 'https://icons.radix-ui.com/',
      currentlyUsed: false,
    },
    {
      name: 'Line Awesome',
      package: 'lia',
      icons: 1544,
      version: '1.3.1',
      description: 'Font Awesome alternative',
      url: 'https://icons8.com/line-awesome',
      currentlyUsed: false,
    },
    {
      name: 'Simple Icons',
      package: 'si',
      icons: 3275,
      version: '12.14.0',
      description: 'Popular brand logos',
      url: 'https://simpleicons.org/',
      currentlyUsed: false,
    },
    {
      name: 'Game Icons',
      package: 'gi',
      icons: 4040,
      version: '12920d6',
      description: 'Gaming themed icons',
      url: 'https://game-icons.net/',
      currentlyUsed: false,
    },
    {
      name: 'Weather Icons',
      package: 'wi',
      icons: 219,
      version: '2.0.12',
      description: 'Weather specific icons',
      url: 'https://erikflowers.github.io/weather-icons/',
      currentlyUsed: false,
    },
    {
      name: 'VS Code Icons',
      package: 'vsc',
      icons: 466,
      version: '0.0.35',
      description: 'VS Code UI icons',
      url: 'https://github.com/microsoft/vscode-codicons',
      currentlyUsed: false,
    },
    {
      name: 'GitHub Octicons',
      package: 'go',
      icons: 264,
      version: '18.3.0',
      description: 'GitHub design system',
      url: 'https://primer.style/foundations/icons',
      currentlyUsed: false,
    },
    {
      name: 'Devicons',
      package: 'di',
      icons: 192,
      version: '1.8.0',
      description: 'Programming language icons',
      url: 'https://vorillaz.github.io/devicons/',
      currentlyUsed: false,
    },
    {
      name: 'Flat Color Icons',
      package: 'fc',
      icons: 329,
      version: '1.0.2',
      description: 'Colorful icon set',
      url: 'https://github.com/icons8/flat-color-icons',
      currentlyUsed: false,
    },
    {
      name: 'Grommet Icons',
      package: 'gr',
      icons: 635,
      version: '4.12.1',
      description: 'Grommet design system',
      url: 'https://icons.grommet.io/',
      currentlyUsed: false,
    },
    {
      name: 'IcoMoon Free',
      package: 'im',
      icons: 491,
      version: 'd006795',
      description: 'Classic icon set',
      url: 'https://icomoon.io/#icons-icomoon',
      currentlyUsed: false,
    },
    {
      name: 'Typicons',
      package: 'ti',
      icons: 336,
      version: '2.1.2',
      description: 'Classic rounded style',
      url: 'https://www.s-ings.com/typicons/',
      currentlyUsed: false,
    },
    {
      name: 'Themify Icons',
      package: 'tfi',
      icons: 352,
      version: 'v0.1.2',
      description: 'Simple line icons',
      url: 'https://themify.me/themify-icons',
      currentlyUsed: false,
    },
    {
      name: 'Simple Line Icons',
      package: 'sl',
      icons: 189,
      version: '2.5.5',
      description: 'Minimalist line icons',
      url: 'https://thesabbir.github.io/simple-line-icons/',
      currentlyUsed: false,
    },
    {
      name: 'Circum Icons',
      package: 'ci',
      icons: 288,
      version: '1.0.0',
      description: 'Consistent geometric design',
      url: 'https://circumicons.com/',
      currentlyUsed: false,
    },
    {
      name: 'Font Awesome 5',
      package: 'fa',
      icons: 1611,
      version: '5.15.4',
      description: 'Legacy Font Awesome',
      url: 'https://fontawesome.com/v5/search',
      currentlyUsed: false,
    },
    {
      name: 'Ionicons 4',
      package: 'io',
      icons: 696,
      version: '4.6.3',
      description: 'Legacy Ionicons version',
      url: 'https://ionic.io/ionicons/v4',
      currentlyUsed: false,
    },
  ];

  const totalIcons = iconLibraries.reduce((sum, lib) => sum + lib.icons, 0);
  const currentlyUsedLibraries = iconLibraries.filter(lib => lib.currentlyUsed);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Icon Libraries</h1>
        <p className="text-lg text-gray-600">
          Available icon libraries in this project via react-icons
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
          <div className="text-3xl font-bold text-violet-900">{iconLibraries.length}</div>
          <div className="text-sm text-violet-700">Icon Libraries</div>
        </div>
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <div className="text-3xl font-bold text-cyan-900">{totalIcons.toLocaleString()}</div>
          <div className="text-sm text-cyan-700">Total Icons Available</div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-900">{currentlyUsedLibraries.length}</div>
          <div className="text-sm text-green-700">Currently Used</div>
        </div>
      </div>

      {currentlyUsedLibraries.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Currently Used</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentlyUsedLibraries.map((lib) => (
              <a
                key={lib.package}
                href={lib.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-50 border-2 border-green-500 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{lib.name}</h3>
                  <span className="text-xs font-medium bg-green-500 text-white px-2 py-1 rounded">
                    IN USE
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{lib.description}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Icons:</span>
                    <span className="font-medium text-gray-900">{lib.icons.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Package:</span>
                    <code className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded">
                      react-icons/{lib.package}
                    </code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Version:</span>
                    <span className="font-medium text-gray-700">{lib.version}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">All Available Libraries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {iconLibraries
            .filter(lib => !lib.currentlyUsed)
            .map((lib) => (
              <a
                key={lib.package}
                href={lib.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-violet-500 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{lib.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{lib.description}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Icons:</span>
                    <span className="font-medium text-gray-900">{lib.icons.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Package:</span>
                    <code className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded">
                      react-icons/{lib.package}
                    </code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Version:</span>
                    <span className="font-medium text-gray-700">{lib.version}</span>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Example</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { HiHome } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';

function MyComponent() {
  return (
    <div>
      <HiHome size={24} />
      <BiUser size={24} />
    </div>
  );
}`}
        </pre>
      </div>
    </div>
  );
}
