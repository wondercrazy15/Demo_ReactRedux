module.exports = async (req, res, next) => {
    const conversationId = req.params.id;
    const msg = req.params.msg;
  res.send('ok');
}
