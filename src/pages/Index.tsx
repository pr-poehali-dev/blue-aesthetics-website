import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/files/a90e2de0-bbb4-4d86-98ad-ff1f39102986.jpg',
      title: 'Голубая бас-гитара'
    },
    {
      url: 'https://cdn.poehali.dev/files/ad9d5a5a-4481-4e2b-b161-3b3aee884f9e.jpg',
      title: 'Винтажный MiniDisc'
    },
    {
      url: 'https://cdn.poehali.dev/projects/b4e4485a-30bd-4477-a577-2b227dca0f5f/files/2dbad1d6-b45b-4992-b6b5-55cca5628c53.jpg',
      title: 'Небесные облака'
    }
  ];

  const facts = [
    {
      icon: 'Sparkles',
      title: 'Успокаивающий эффект',
      description: 'Голубой цвет снижает артериальное давление и частоту сердцебиения, создавая ощущение спокойствия и умиротворения.'
    },
    {
      icon: 'Eye',
      title: 'Самый любимый цвет',
      description: 'По результатам мировых опросов, голубой — самый популярный цвет в мире, его предпочитают около 40% людей.'
    },
    {
      icon: 'Droplet',
      title: 'Цвет доверия',
      description: 'Многие компании используют голубой в логотипах, так как он ассоциируется с надёжностью, стабильностью и профессионализмом.'
    },
    {
      icon: 'Globe',
      title: 'Редкость в природе',
      description: 'Голубой — один из самых редких цветов среди живых существ и растений. Синий пигмент в природе встречается крайне редко.'
    },
    {
      icon: 'Brain',
      title: 'Стимулирует креативность',
      description: 'Исследования показывают, что голубой цвет способствует творческому мышлению и повышает продуктивность.'
    },
    {
      icon: 'Heart',
      title: 'Цвет безграничности',
      description: 'Голубой ассоциируется с небом и океаном, символизируя бесконечность, свободу и мечты.'
    }
  ];

  const artPieces = [
    {
      period: 'Древний Египет',
      description: 'Египтяне создали первый синтетический голубой пигмент — "египетский синий" около 2200 г. до н.э., используя его в настенных росписях и украшениях.'
    },
    {
      period: 'Средневековье',
      description: 'Ультрамарин из лазурита был дороже золота. Его использовали только для изображения Девы Марии, символизируя божественность и небесную чистоту.'
    },
    {
      period: 'Ренессанс',
      description: 'Художники эпохи Возрождения активно применяли голубой для передачи перспективы и глубины, создавая иллюзию воздушного пространства.'
    },
    {
      period: 'Импрессионизм',
      description: 'Клод Моне использовал множество оттенков голубого в серии "Водяные лилии", исследуя игру света и отражений на воде.'
    },
    {
      period: 'XX век',
      description: 'Пабло Пикассо в "голубой период" (1901-1904) создавал меланхоличные работы преимущественно в сине-зелёных тонах.'
    },
    {
      period: 'Современность',
      description: 'В 2016 году художник Аниш Капур получил эксклюзивные права на использование самого чёрного материала, что вызвало создание "самого синего" пигмента в ответ.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">BlueAesthetics</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'gallery', label: 'Галерея', icon: 'Images' },
                { id: 'facts', label: 'Факты', icon: 'Lightbulb' },
                { id: 'art', label: 'Голубой в искусстве', icon: 'Palette' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-medium' : 'text-foreground'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
              Магия голубого цвета
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Погрузитесь в мир спокойствия, гармонии и бесконечной красоты голубых оттенков
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <Button size="lg" onClick={() => scrollToSection('gallery')} className="gap-2">
                <Icon name="Image" size={20} />
                Смотреть галерею
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('facts')} className="gap-2">
                <Icon name="BookOpen" size={20} />
                Узнать факты
              </Button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'Waves', title: 'Умиротворение', desc: 'Цвет неба и океана' },
              { icon: 'Sparkles', title: 'Вдохновение', desc: 'Источник креативности' },
              { icon: 'Heart', title: 'Гармония', desc: 'Баланс и спокойствие' }
            ].map((feature, idx) => (
              <Card key={idx} className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Галерея</h2>
            <p className="text-lg text-muted-foreground">Эстетика голубого в природе и искусстве</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-lg p-6">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="facts" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Интересные факты</h2>
            <p className="text-lg text-muted-foreground">Удивительные свойства голубого цвета</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact, idx) => (
              <Card
                key={idx}
                className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Icon name={fact.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{fact.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="art" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Голубой в искусстве</h2>
            <p className="text-lg text-muted-foreground">История голубого цвета в мировом искусстве</p>
          </div>
          <div className="space-y-6">
            {artPieces.map((piece, idx) => (
              <Card
                key={idx}
                className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Palette" size={28} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-primary">{piece.period}</h3>
                      <p className="text-muted-foreground leading-relaxed">{piece.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-6xl text-center space-y-4">
          <h3 className="text-2xl font-bold">BlueAesthetics</h3>
          <p className="text-white/80">Исследуйте красоту и глубину голубого цвета</p>
          <div className="flex justify-center gap-6 pt-4">
            <Icon name="Instagram" size={24} className="cursor-pointer hover:scale-110 transition-transform" />
            <Icon name="Twitter" size={24} className="cursor-pointer hover:scale-110 transition-transform" />
            <Icon name="Facebook" size={24} className="cursor-pointer hover:scale-110 transition-transform" />
          </div>
          <p className="text-sm text-white/60 pt-6">© 2024 BlueAesthetics. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;