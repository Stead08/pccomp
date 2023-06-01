import {Button, CardBody, Flex, Heading, Input, Select, Stack} from "@chakra-ui/react";
import React, {FormEvent, useState} from "react";
import {useTotal} from "@/app/total_price";
import {PartsCategory} from "@/app/types/types";

export type RakutenItem = {
  Item: {
    itemName: string;
    itemPrice: number;
    affiliateUrl: string;
  }
}

type RakutenResponse = {
  Items: RakutenItem[];
};

type Props = {
  index: number;
  category: PartsCategory;
  onRemove: () => void;
}
export default function ComputerComponentCardBody({index, category, onRemove}: Props) {
  const [parts, setParts] = useState<RakutenItem[]>([]);
  const [selected, setSelected] = useState<RakutenItem>();
  const [keyword, setKeyword] = useState("");

  const fetchParts = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!category) return;
    const rakuten_genre_id = category.rakuten_category_id;
    const query_keyword = keyword !== "" ? `&keyword=${keyword}` : "";
    const ng_keyword = "中古".toString()
    const response = await fetch(
        `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json${query_keyword}&genreId=${rakuten_genre_id}&NGKeyword=${ng_keyword}&applicationId=1071601269090406266&affiliateId=329b32be.5b0feed5.329b32bf.f5ac8238`
    );
    const json: RakutenResponse = await response.json();
    setParts(json.Items);
  };

  const {addToTotal} = useTotal();
  return (
      <CardBody>
        <Stack direction={['column', 'row']} spacing='24px'>
          <Heading size="lg" mb={5}>{`${category?.name}${index !== 0 ? ` ${index + 1}` : ""}`}</Heading>
          {index !== 0 && <Button onClick={() => {
            onRemove();
            const price = selected?.Item.itemPrice;
            addToTotal(-Number(price));
          }} colorScheme='red' variant='outline'>削除</Button>}
        </Stack>

        <Flex direction="column" align="center">
          <form onSubmit={(event) => fetchParts(event)} style={{width: '100%'}}>
            <Flex mb={5} direction={["column", "row"]} justify="space-between">
              <Input placeholder='品番、メーカー、ブランドを検索' value={keyword} onChange={e => setKeyword(e.target.value)}
                     mb={["5", "0"]}
                     flex={1} mr={5}/>
              <Button type="submit" colorScheme='orange' variant='outline'>
                検索
              </Button>
            </Flex>

            <Flex direction={["column", "row"]} justify="space-between">
              <Select
                  placeholder="Select option"
                  onChange={(event) => {
                    const json: RakutenItem = JSON.parse(event.target.value);
                    setSelected(json);
                    console.log(selected);
                    addToTotal(Number(json.Item.itemPrice))
                  }}
                  w="100%"
                  mb={["5", "0"]}
                  flex={1}
                  mr={5}
              >
                {parts.map((item: any, index: number) => (
                    <option key={index} value={JSON.stringify(item)}>
                      {item.Item.itemName + " ￥" + item.Item.itemPrice}
                    </option>
                ))}
              </Select>
            </Flex>
            <Flex direction="column" align="flex-end">
              {selected && (
                  <Heading mb={2}>
                    ￥{selected.Item.itemPrice}
                  </Heading>
              )}
              {selected && (
                  <a target="_blank" href={selected.Item.affiliateUrl}>
                    商品リンク
                  </a>
              )}
            </Flex>

          </form>
        </Flex>
      </CardBody>
  )
}