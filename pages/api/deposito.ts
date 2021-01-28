import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
const { Schema } = mongoose;
export default async function deposito(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mongourl = process.env['MONGOHOST'];
  const mongouser = process.env['MONGOUSER'];
  const mongopass = process.env['MONGOPASS'];
  const mongodb = process.env['MONGODATABASE'];

  const connectStr = `mongodb://${mongouser}:${mongopass}@${mongourl}/${mongodb}`;

  const x = await mongoose.connect(connectStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async function (req, res) {
    const { agencia, conta, valor } = req.body.json();
    const accountsSchema = new Schema({
      agencia: Number,
      conta: Number,
      name: String,
      balance: Number,
    });
    const account = mongoose.model('accounts', accountsSchema);
    const contas = account.find({ agencia: agencia, conta: conta });

    res.statusCode = 200;
    res.json({ contas, conta, agencia, name, valor });

    // we're connected!
  });
}
