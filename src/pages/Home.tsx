import React, { useState, useEffect } from "react";
import { ideas, Category, Difficulty } from "@/data/ideas";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Code, Rocket, Clock, Zap, Wallet, ArrowRight, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const difficultyColors = {
  "Çok Kolay": "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  "Kolay": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Orta": "bg-amber-500/10 text-amber-500 border-amber-500/20",
};

const categoryIcons = {
  "Araç": <Zap className="w-3 h-3 mr-1" />,
  "İçerik": <LayoutGrid className="w-3 h-3 mr-1" />,
  "Süreç": <Rocket className="w-3 h-3 mr-1" />,
};

function CountUp({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | "Tümü">("Tümü");
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty | "Tümü">("Tümü");

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
  }, []);

  const filteredIdeas = ideas.filter((idea) => {
    const matchCategory = activeCategory === "Tümü" || idea.category === activeCategory;
    const matchDifficulty = activeDifficulty === "Tümü" || idea.difficulty === activeDifficulty;
    return matchCategory && matchDifficulty;
  });

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 overflow-x-hidden">
      {/* Background gradients */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 opacity-50"></div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm mb-6 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Pasif Gelir Lab
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-sans">
            Seninle Olmadan <br className="hidden md:block" />
            <span className="gradient-text">Çalışan Şeyler Yap</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Vibe coding + yapay zeka = uyurken para kazanmak. Hızlı kur, çalıştır, unut. Bir sonrakine geç.
          </p>
          <p className="text-sm font-mono text-primary/80 mb-10">
            &gt; Aşağıdaki fikirlerin hepsini teknik bilgisi olan biri 1-3 günde hayata geçirebilir.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center">
            <span className="text-4xl font-bold font-mono text-foreground mb-2">
              <CountUp end={10} suffix="+" />
            </span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Fikir</span>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center">
            <span className="text-4xl font-bold font-mono text-foreground mb-2">1-3</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Gün Ortalama Kurulum</span>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center">
            <span className="text-4xl font-bold font-mono text-foreground mb-2">%100</span>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Otomasyon Hedefi</span>
          </div>
        </motion.div>
      </section>

      {/* Ideas Section */}
      <section className="px-6 max-w-6xl mx-auto relative z-10" id="ideas">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <Tabs defaultValue="Tümü" className="w-full md:w-auto" onValueChange={(v) => setActiveCategory(v as any)}>
            <TabsList className="bg-secondary/50 border border-border">
              <TabsTrigger value="Tümü" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Tümü</TabsTrigger>
              <TabsTrigger value="Araç" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Araçlar</TabsTrigger>
              <TabsTrigger value="İçerik" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">İçerik</TabsTrigger>
              <TabsTrigger value="Süreç" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Süreç</TabsTrigger>
            </TabsList>
          </Tabs>

          <Tabs defaultValue="Tümü" className="w-full md:w-auto" onValueChange={(v) => setActiveDifficulty(v as any)}>
            <TabsList className="bg-secondary/50 border border-border">
              <TabsTrigger value="Tümü">Tüm Zorluklar</TabsTrigger>
              <TabsTrigger value="Çok Kolay">Çok Kolay</TabsTrigger>
              <TabsTrigger value="Kolay">Kolay</TabsTrigger>
              <TabsTrigger value="Orta">Orta</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredIdeas.map((idea) => (
              <motion.div
                key={idea.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <Card className="h-full bg-card/40 backdrop-blur-sm border-card-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(99,102,241,0.12)] group flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline" className="bg-secondary text-secondary-foreground border-border">
                        {categoryIcons[idea.category]}
                        {idea.category}
                      </Badge>
                      <Badge variant="outline" className={difficultyColors[idea.difficulty]}>
                        {idea.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{idea.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {idea.description}
                    </p>
                    
                    <div className="space-y-3 mt-auto">
                      <div className="flex items-center text-sm text-foreground/80 font-mono bg-secondary/30 p-2 rounded-md">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        <span className="w-24 text-muted-foreground text-xs">Kurulum:</span>
                        {idea.buildTime}
                      </div>
                      <div className="flex items-center text-sm text-foreground/80 font-mono bg-secondary/30 p-2 rounded-md">
                        <Wallet className="w-4 h-4 mr-2 text-emerald-400" />
                        <span className="w-24 text-muted-foreground text-xs">Potansiyel:</span>
                        {idea.potential}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredIdeas.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Bu filtrelere uygun fikir bulunamadı.</p>
          </div>
        )}
      </section>

      {/* How to Start */}
      <section className="mt-32 px-6 max-w-4xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-10 text-center">Nasıl Başlarsın?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-[2px] bg-border z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4 shadow-[0_0_20px_rgba(99,102,241,0.4)]">1</div>
              <h3 className="text-lg font-semibold mb-2">Fikri seç</h3>
              <p className="text-sm text-muted-foreground">Listedeki bir fikri seç ve hedef kullanıcıyı netleştir.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-secondary border border-primary/30 flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">Buradan inşa et</h3>
              <p className="text-sm text-muted-foreground">Replit Agent veya Claude Code ile 1-3 günde kur.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-secondary border border-primary/30 flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">Yayınla ve unut</h3>
              <p className="text-sm text-muted-foreground">Stripe bağla, bir nişe duyur, bir sonrakine geç.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-medium mb-6">Hangisiyle başlamak istiyorsun? Hemen inşa edelim.</h3>
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all">
              Hemen Başla <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
