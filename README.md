<main>
      <h1>Relógio Pomodoro</h1>
      <h3>Seja produtivo da melhor forma!</h3>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workSeconds,
          breakSeconds,
          setWorkSeconds,
          setBreakSeconds,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
