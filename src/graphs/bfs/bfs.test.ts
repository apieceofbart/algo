import { BFSGraph, Vertex } from "./bfs";
import * as chai from "chai";
const { expect } = chai;
describe.only("bfs", () => {
  it("should find the shortest path between Hannah and Mabel", () => {
    const Mary = new Vertex("Mary");
    const Hannah = new Vertex("Hannah");
    const Max = new Vertex("Max");
    const Mel = new Vertex("Mel");
    const Dan = new Vertex("Dan");
    const Nis = new Vertex("Nis");
    const Chris = new Vertex("Chris");
    const Nicolette = new Vertex("Nicolette");
    const Yair = new Vertex("Yair");
    const Mabel = new Vertex("Mabel");
    const Liz = new Vertex("Liz");

    const graph = new BFSGraph([
      Mary,
      Hannah,
      Max,
      Mel,
      Dan,
      Nis,
      Chris,
      Nicolette,
      Yair,
      Mabel,
      Liz,
    ]);

    Mary.connect(Hannah);
    Hannah.connect(Max);
    Hannah.connect(Mel);
    Hannah.connect(Nis);
    Hannah.connect(Liz);
    Nis.connect(Dan);
    Nis.connect(Chris);
    Nis.connect(Yair);
    Chris.connect(Nicolette);
    Yair.connect(Mabel);
    Yair.connect(Liz);
    Liz.connect(Mabel);

    expect(graph.shortestPath(Hannah, Mabel)).to.deep.equal([
      "Hannah",
      "Liz",
      "Mabel",
    ]);
  });
});
