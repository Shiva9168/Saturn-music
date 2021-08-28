module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(`s,help | ${client.guilds.cache.size} Guilds`, {
    type: "LISTENING"
})
};